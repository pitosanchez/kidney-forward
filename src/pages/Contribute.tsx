import React, { useState, useEffect } from "react";
import { useHeader } from "../contexts/HeaderContext";
import { getAssetPath } from "../utils/assetPath";

const Contribute: React.FC = () => {
  const { setIsTransparent } = useHeader();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    donor_name: "",
    donor_email: "",
    donor_phone: "",
    amount: 100,
    frequency: "one-time",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "United States",
    card_number: "",
    exp_month: "",
    exp_year: "",
    cvv: "",
  });

  useEffect(() => {
    setIsTransparent(false);
    return () => setIsTransparent(false);
  }, [setIsTransparent]);

  const update = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // In production, you'd use Stripe Elements for secure card collection
      // For now, we'll simulate the payment flow

      // Create payment intent
      const intentRes = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: form.amount,
          donor_name: form.donor_name,
          donor_email: form.donor_email,
        }),
      });

      if (!intentRes.ok) throw new Error("Payment failed");

      const { paymentId } = await intentRes.json();

      // Record donation
      const donationRes = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          stripe_payment_id: paymentId,
          status: "completed",
        }),
      });

      if (!donationRes.ok) throw new Error("Failed to record donation");

      setSuccess(true);
      setForm({
        donor_name: "",
        donor_email: "",
        donor_phone: "",
        amount: 100,
        frequency: "one-time",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "United States",
        card_number: "",
        exp_month: "",
        exp_year: "",
        cvv: "",
      });
    } catch (err: any) {
      setError(err.message || "Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Kidney Forward branding */}
          <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl p-12 text-white flex flex-col justify-center items-center">
            <img
              src={getAssetPath("/images/logo2.png")}
              alt="Kidney Forward"
              className="h-24 mb-8"
            />
            <h2 className="text-3xl font-bold mb-4 text-center">
              Support Our Mission
            </h2>
            <p className="text-lg text-center opacity-90 mb-8">
              Your donation helps connect kidney donors with patients in need
              and saves lives.
            </p>
            <div className="space-y-4 w-full max-w-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💚</span>
                </div>
                <div>
                  <p className="font-semibold">90,000+ Waiting</p>
                  <p className="text-sm opacity-75">Patients need kidneys</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <p className="font-semibold">500+ Matched</p>
                  <p className="text-sm opacity-75">Successful connections</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🏥</span>
                </div>
                <div>
                  <p className="font-semibold">12 Partners</p>
                  <p className="text-sm opacity-75">Transplant centers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Donation form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Donation Form
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Make a difference today
            </p>

            {success ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>Your donation has been processed successfully.</p>
                <p className="mt-2">
                  You'll receive a receipt at {form.donor_email}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Make Another Donation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.donor_name.split(" ")[0] || ""}
                      onChange={(e) => {
                        const last = form.donor_name
                          .split(" ")
                          .slice(1)
                          .join(" ");
                        update(
                          "donor_name",
                          `${e.target.value} ${last}`.trim()
                        );
                      }}
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      value={
                        form.donor_name.split(" ").slice(1).join(" ") || ""
                      }
                      onChange={(e) => {
                        const first = form.donor_name.split(" ")[0] || "";
                        update(
                          "donor_name",
                          `${first} ${e.target.value}`.trim()
                        );
                      }}
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                {/* Contact info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-lg px-3 py-2"
                    value={form.donor_email}
                    onChange={(e) => update("donor_email", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border rounded-lg px-3 py-2"
                    value={form.donor_phone}
                    onChange={(e) => update("donor_phone", e.target.value)}
                    placeholder="800-555-1234"
                  />
                </div>

                {/* Billing Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Billing Address *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg px-3 py-2"
                    value={form.billing_address}
                    onChange={(e) => update("billing_address", e.target.value)}
                    placeholder="12345 Main Street"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.billing_city}
                      onChange={(e) => update("billing_city", e.target.value)}
                      placeholder="City Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <select
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.billing_state}
                      onChange={(e) => update("billing_state", e.target.value)}
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.billing_zip}
                      onChange={(e) => update("billing_zip", e.target.value)}
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      value={form.billing_country}
                      onChange={(e) =>
                        update("billing_country", e.target.value)
                      }
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>

                {/* Donation Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Donation Amount *
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => update("amount", amt)}
                        className={`py-2 rounded-lg border font-medium transition-colors ${
                          form.amount === amt
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">$</span>
                    <input
                      type="number"
                      min="1"
                      required
                      className="flex-1 border rounded-lg px-3 py-2"
                      value={form.amount}
                      onChange={(e) => update("amount", Number(e.target.value))}
                    />
                    <select
                      className="ml-2 border rounded-lg px-3 py-2"
                      value={form.frequency}
                      onChange={(e) => update("frequency", e.target.value)}
                    >
                      <option value="one-time">One Time</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>

                {/* Payment Info (simplified for demo) */}
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    💳 Payment processing secured by Stripe
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-lg px-3 py-2"
                      placeholder="4000 0000 0000 0002"
                      value={form.card_number}
                      onChange={(e) => update("card_number", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Month *
                      </label>
                      <select
                        required
                        className="w-full border rounded-lg px-3 py-2"
                        value={form.exp_month}
                        onChange={(e) => update("exp_month", e.target.value)}
                      >
                        <option value="">MM</option>
                        {[...Array(12)].map((_, i) => (
                          <option
                            key={i}
                            value={String(i + 1).padStart(2, "0")}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Year *
                      </label>
                      <select
                        required
                        className="w-full border rounded-lg px-3 py-2"
                        value={form.exp_year}
                        onChange={(e) => update("exp_year", e.target.value)}
                      >
                        <option value="">YYYY</option>
                        {[...Array(10)].map((_, i) => {
                          const year = new Date().getFullYear() + i;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={4}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="123"
                        value={form.cvv}
                        onChange={(e) => update("cvv", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? "Processing..." : `Donate $${form.amount}`}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your donation is tax-deductible. You'll receive a receipt via
                  email.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
