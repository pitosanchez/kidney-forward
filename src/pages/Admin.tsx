import React, { useEffect, useMemo, useState } from "react";
import { useHeader } from "../contexts/HeaderContext";

type Row = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  notes?: string;
};

const Admin: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const [rows, setRows] = useState<Row[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  const fetchRows = async () => {
    setLoading(true);
    const u = new URL("/api/registrations", window.location.origin);
    if (q) u.searchParams.set("q", q);
    if (status) u.searchParams.set("status", status);
    const res = await fetch(u.toString());
    const json = await res.json();
    setRows(json.rows || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const updateRow = async (id: number, patch: Partial<Row>) => {
    await fetch(`/api/registrations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    await fetchRows();
  };

  const columns = useMemo(
    () => [
      { key: "id", label: "ID" },
      { key: "created_at", label: "Created" },
      { key: "first_name", label: "First" },
      { key: "last_name", label: "Last" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "status", label: "Status" },
      { key: "notes", label: "Notes" },
    ],
    []
  );

  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Donor Registrations</h1>
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name or email"
            className="border rounded px-3 py-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="reviewing">Reviewing</option>
            <option value="contacted">Contacted</option>
            <option value="withdrawn">Withdrawn</option>
            <option value="approved">Approved</option>
          </select>
          <button
            onClick={fetchRows}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Apply
          </button>
        </div>

        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className="text-left px-3 py-2 font-semibold text-gray-700 whitespace-nowrap"
                  >
                    {c.label}
                  </th>
                ))}
                <th className="px-3 py-2" />
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="px-3 py-4" colSpan={columns.length + 1}>
                    Loading...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td className="px-3 py-4" colSpan={columns.length + 1}>
                    No rows
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="px-3 py-2">{r.id}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {new Date(r.created_at).toLocaleString()}
                    </td>
                    <td className="px-3 py-2">{r.first_name}</td>
                    <td className="px-3 py-2">{r.last_name}</td>
                    <td className="px-3 py-2">{r.email}</td>
                    <td className="px-3 py-2">{r.phone}</td>
                    <td className="px-3 py-2">
                      <select
                        value={r.status}
                        onChange={(e) =>
                          updateRow(r.id, { status: e.target.value })
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option value="new">new</option>
                        <option value="reviewing">reviewing</option>
                        <option value="contacted">contacted</option>
                        <option value="withdrawn">withdrawn</option>
                        <option value="approved">approved</option>
                      </select>
                    </td>
                    <td className="px-3 py-2">
                      <textarea
                        defaultValue={r.notes || ""}
                        onBlur={(e) =>
                          updateRow(r.id, { notes: e.target.value })
                        }
                        className="border rounded px-2 py-1 w-64 h-16"
                      />
                    </td>
                    <td className="px-3 py-2 text-right whitespace-nowrap">
                      <button
                        onClick={() => updateRow(r.id, { status: "reviewing" })}
                        className="px-3 py-1 border rounded mr-2"
                      >
                        Review
                      </button>
                      <button
                        onClick={() => updateRow(r.id, { status: "approved" })}
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
