import React, { useEffect, useState } from "react";
import { useHeader } from "../contexts/HeaderContext";

type Analytics = {
  donors: { total: number; approved: number };
  donations: { count: number; total: number };
  patients: { total: number; waiting: number };
};

type Tab = "overview" | "donors" | "donations" | "patients";

const AdminDashboard: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [donors, setDonors] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsTransparent(false);
    fetchAnalytics();
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  useEffect(() => {
    if (activeTab === "donors") fetchDonors();
    if (activeTab === "donations") fetchDonations();
    if (activeTab === "patients") fetchPatients();
  }, [activeTab]);

  const fetchAnalytics = async () => {
    const res = await fetch("/api/analytics");
    const data = await res.json();
    setAnalytics(data);
  };

  const fetchDonors = async () => {
    setLoading(true);
    const res = await fetch("/api/registrations");
    const data = await res.json();
    setDonors(data.rows || []);
    setLoading(false);
  };

  const fetchDonations = async () => {
    setLoading(true);
    const res = await fetch("/api/donations");
    const data = await res.json();
    setDonations(data.rows || []);
    setLoading(false);
  };

  const fetchPatients = async () => {
    setLoading(true);
    const res = await fetch("/api/patients");
    const data = await res.json();
    setPatients(data.rows || []);
    setLoading(false);
  };

  const updateDonorStatus = async (id: number, status: string) => {
    await fetch(`/api/registrations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchDonors();
  };

  const updatePatientStatus = async (id: number, updates: any) => {
    await fetch(`/api/patients/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    fetchPatients();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage donors, donations, and patients</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg shadow p-1">
          {(["overview", "donors", "donations", "patients"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && analytics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Donors Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Kidney Donors</h3>
                <span className="text-2xl">🫶</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Registered:</span>
                  <span className="font-bold text-2xl">{analytics.donors.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Approved:</span>
                  <span className="font-semibold text-green-600">
                    {analytics.donors.approved}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pending:</span>
                  <span className="font-semibold text-yellow-600">
                    {analytics.donors.total - analytics.donors.approved}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{
                      width: `${
                        analytics.donors.total > 0
                          ? (analytics.donors.approved / analytics.donors.total) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {analytics.donors.total > 0
                    ? Math.round((analytics.donors.approved / analytics.donors.total) * 100)
                    : 0}
                  % approved
                </p>
              </div>
            </div>

            {/* Donations Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Financial Donations</h3>
                <span className="text-2xl">💰</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Raised:</span>
                  <span className="font-bold text-2xl text-green-600">
                    {formatCurrency(analytics.donations.total)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Donations:</span>
                  <span className="font-semibold">{analytics.donations.count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average:</span>
                  <span className="font-semibold">
                    {formatCurrency(
                      analytics.donations.count > 0
                        ? analytics.donations.total / analytics.donations.count
                        : 0
                    )}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">Monthly Goal</p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-blue-500"
                    style={{
                      width: `${Math.min((analytics.donations.total / 50000) * 100, 100)}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {Math.round((analytics.donations.total / 50000) * 100)}% of $50,000
                </p>
              </div>
            </div>

            {/* Patients Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Patients</h3>
                <span className="text-2xl">🏥</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Patients:</span>
                  <span className="font-bold text-2xl">{analytics.patients.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Waiting:</span>
                  <span className="font-semibold text-yellow-600">
                    {analytics.patients.waiting}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Matched:</span>
                  <span className="font-semibold text-green-600">
                    {analytics.patients.total - analytics.patients.waiting}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm font-semibold text-gray-700">Priority Levels</p>
                <div className="flex justify-between text-xs mt-2">
                  <span className="text-red-600">🔴 Critical: 3</span>
                  <span className="text-yellow-600">🟡 High: 8</span>
                  <span className="text-green-600">🟢 Standard: {analytics.patients.waiting - 11}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Donors Tab */}
        {activeTab === "donors" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Potential Kidney Donors</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        Loading...
                      </td>
                    </tr>
                  ) : donors.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        No donors registered yet
                      </td>
                    </tr>
                  ) : (
                    donors.map((donor) => (
                      <tr key={donor.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">{donor.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {donor.first_name} {donor.last_name}
                        </td>
                        <td className="px-4 py-3 text-sm">{donor.email}</td>
                        <td className="px-4 py-3 text-sm">{donor.phone}</td>
                        <td className="px-4 py-3 text-sm">
                          {formatDate(donor.created_at)}
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={donor.status}
                            onChange={(e) => updateDonorStatus(donor.id, e.target.value)}
                            className={`text-sm px-2 py-1 rounded-full border ${
                              donor.status === "approved"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : donor.status === "reviewing"
                                ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="contacted">Contacted</option>
                            <option value="approved">Approved</option>
                            <option value="withdrawn">Withdrawn</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === "donations" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">Financial Donations</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Donor
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Frequency
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        Loading...
                      </td>
                    </tr>
                  ) : donations.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        No donations yet
                      </td>
                    </tr>
                  ) : (
                    donations.map((donation) => (
                      <tr key={donation.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">{donation.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {donation.donor_name}
                        </td>
                        <td className="px-4 py-3 text-sm">{donation.donor_email}</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-600">
                          {formatCurrency(donation.amount)}
                        </td>
                        <td className="px-4 py-3 text-sm capitalize">
                          {donation.frequency}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {formatDate(donation.created_at)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              donation.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {donation.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Patients Tab */}
        {activeTab === "patients" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Kidney Transplant Patients</h2>
              <button
                onClick={() => {
                  // Add patient modal would go here
                  alert("Add Patient feature coming soon!");
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Patient
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Blood Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Hospital
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Priority
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        Loading...
                      </td>
                    </tr>
                  ) : patients.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                        No patients registered yet
                      </td>
                    </tr>
                  ) : (
                    patients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">{patient.id}</td>
                        <td className="px-4 py-3 text-sm font-medium">
                          {patient.first_name} {patient.last_name}
                        </td>
                        <td className="px-4 py-3 text-sm font-bold">
                          {patient.blood_type || "Unknown"}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          {patient.hospital || "Not assigned"}
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={patient.priority_level}
                            onChange={(e) =>
                              updatePatientStatus(patient.id, {
                                priority_level: e.target.value,
                              })
                            }
                            className={`text-xs px-2 py-1 rounded-full border ${
                              patient.priority_level === "critical"
                                ? "bg-red-50 text-red-700 border-red-200"
                                : patient.priority_level === "high"
                                ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                : "bg-green-50 text-green-700 border-green-200"
                            }`}
                          >
                            <option value="standard">Standard</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={patient.status}
                            onChange={(e) =>
                              updatePatientStatus(patient.id, { status: e.target.value })
                            }
                            className="text-sm px-2 py-1 rounded border"
                          >
                            <option value="waiting">Waiting</option>
                            <option value="matched">Matched</option>
                            <option value="transplanted">Transplanted</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
