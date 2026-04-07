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

  // ✅ Validation function
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

    emailjs
      .send(
        "service_km4odue",
        "template_dhg5ozo",
        form,
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-3">
      
      {/* FORM CONTAINER */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-5 sm:p-7 shadow-xl">

        {/* ❌ CLOSE BUTTON FIXED */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
          Admission Form
        </h2>

        {success && (
          <p className="text-green-600 text-center mb-3">
            ✅ Submitted Successfully
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* First Name */}
          <div>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full p-2 border rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border rounded"
          />

          {/* Email */}
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Mobile + Pincode */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full">
              <input
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile*"
                className="w-full p-2 border rounded"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Country + State */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full p-2 border rounded"
            />
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* City + Location */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

        </form>
      </div>
    </div>
  );
}