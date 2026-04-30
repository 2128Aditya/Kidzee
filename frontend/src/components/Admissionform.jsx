import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EnquiryForm({ onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    location: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!form.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = "Valid 10 digit number required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const templateParams = {
      name: form.firstName + " " + form.lastName,
      ...form
    };

    emailjs
      .send(
        "service_km4odue",
        "template_6mgzyhv",
        templateParams,
        "yPbwbGe8S1oThjNHg"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          pincode: "",
          country: "",
          state: "",
          city: "",
          location: ""
        });

        setTimeout(() => {
          setSuccess(false);
          onClose && onClose();
        }, 2000);
      })
      .catch(() => {
        setLoading(false);
        alert("Email send failed ❌");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 overflow-y-auto">

      <div className="relative w-full max-w-2xl rounded-3xl shadow-2xl bg-white overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Enquire Now
          </h2>

          {/* CLOSE BUTTON FIXED */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-5 sm:p-8 max-h-[75vh] overflow-y-auto">

          {success && (
            <div className="mb-4 text-center text-green-800 font-semibold">
              ✅ Form Submitted Successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 pb-4">

            <div>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pin Code"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />

              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none"
              />
            </div>

            {/* BUTTON FIX */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 active:scale-95 text-white px-12 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}