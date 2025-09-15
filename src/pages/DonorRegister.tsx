import React, { useEffect, useState } from "react";
import { useHeader } from "../contexts/HeaderContext";
import LazyImage from "../components/LazyImage";
import { getAssetPath } from "../utils/assetPath";

type Step = 1 | 2 | 3;

const DonorRegister: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<number | null>(null);
  const [form, setForm] = useState<any>({ legal_name: true });

  useEffect(() => {
    setIsTransparent(true);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  const update = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 1)
      return form.first_name && form.last_name && form.email && form.dob;
    if (step === 2)
      return form.height_ft && form.height_in !== undefined && form.weight_lbs;
    return true;
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      setSuccessId(json.id);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src={getAssetPath("/images/sunlit-woman.webp")}
            alt="Donor Registration Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/0" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-md">
            Donor Registration Process
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Form Card */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            {successId ? (
              <div className="bg-green-50 border border-green-200 text-green-900 p-8 rounded-xl text-center">
                <div className="text-6xl mb-4">🫶</div>
                <h2 className="text-2xl font-bold mb-4">
                  Thank you for considering saving a life
                </h2>
                <p className="text-lg mb-4">
                  Your decision to explore living donation represents the very best of humanity. 
                  You are brave, generous, and compassionate.
                </p>
                <p className="text-base mb-4">
                  A Kidney Forward team member will contact you within 48 hours to discuss 
                  the next steps and answer any questions you may have.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200 mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Your Registration ID:</strong> #{successId}
                  </p>
                  {form.email && (
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Confirmation email sent to:</strong> {form.email}
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  In the meantime, feel free to explore our educational resources or 
                  share this opportunity with friends and family.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setSuccessId(null)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Register Another Person
                  </button>
                  <a
                    href="/donors"
                    className="px-6 py-2 bg-white border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Learn More About Donation
                  </a>
                </div>
              </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
              {/* Progress */}
              <div className="mb-6">
                <div className="text-sm text-gray-600 font-medium mb-2">
                  Step {step} of 3
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-blue-600 transition-all duration-300`}
                    style={{ width: `${step * 33.33}%` }}
                  />
                </div>
              </div>

              {/* Steps */}
              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.first_name || ""}
                      onChange={(e) => update("first_name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.last_name || ""}
                      onChange={(e) => update("last_name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.email || ""}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.phone || ""}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.dob || ""}
                      onChange={(e) => update("dob", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.gender || ""}
                      onChange={(e) => update("gender", e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Height (ft) *
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.height_ft || ""}
                      onChange={(e) =>
                        update("height_ft", Number(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Height (in) *
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.height_in || ""}
                      onChange={(e) =>
                        update("height_in", Number(e.target.value))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (lbs) *
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.weight_lbs || ""}
                      onChange={(e) =>
                        update("weight_lbs", Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Marital Status
                    </label>
                    <select
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.marital_status || ""}
                      onChange={(e) => update("marital_status", e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="separated">Separated</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address 1
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.address1 || ""}
                      onChange={(e) => update("address1", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address 2
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.address2 || ""}
                      onChange={(e) => update("address2", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.city || ""}
                      onChange={(e) => update("city", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.state || ""}
                      onChange={(e) => update("state", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zip
                    </label>
                    <input
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.zip || ""}
                      onChange={(e) => update("zip", e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes
                    </label>
                    <textarea
                      className="w-full border rounded-lg px-3 py-2"
                      rows={4}
                      value={form.notes || ""}
                      onChange={(e) => update("notes", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  className="px-5 py-2 rounded-lg border"
                  onClick={() =>
                    setStep((s) => (s > 1 ? ((s - 1) as Step) : s))
                  }
                  disabled={step === 1}
                >
                  Back
                </button>
                {step < 3 ? (
                  <button
                    className="px-5 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
                    disabled={!canNext()}
                    onClick={() => setStep((s) => (s + 1) as Step)}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="px-5 py-2 rounded-lg bg-green-600 text-white disabled:opacity-50"
                    disabled={submitting}
                    onClick={submit}
                  >
                    {submitting ? "Submitting..." : "Submit Registration"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DonorRegister;
