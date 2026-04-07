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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.mobile) {
      alert("Please fill required fields ⚠️");
      return;
    }

    setLoading(true);

    emailjs.send(
      "service_km4odue",
      "template_6mgzyhv",
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
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Email send failed ❌");
      });
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">

      {/* Header */}
      <div className="bg-yellow-300 p-4">
        <h2 className="text-xl font-bold text-black">Enquire Now</h2>
      </div>

      {/* Form Section */}
      <div className="bg-purple-200 p-6">
        {success && (
          <p className="text-green-700 text-center mb-4 font-semibold">
            ✅ Form Submitted Successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full width */}
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name*"
            className="w-full px-4 py-3 rounded-full bg-gray-100 outline-none"
          />

          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name*"
            className="w-full px-4 py-3 rounded-full bg-gray-100 outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            className="w-full px-4 py-3 rounded-full bg-gray-100 outline-none"
          />

          {/* 2 Column Grid */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile*"
              className="px-4 py-3 rounded-full bg-gray-100 outline-none"
            />

            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              placeholder="Pin Code*"
              className="px-4 py-3 rounded-full bg-gray-100 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country*"
              className="px-4 py-3 rounded-full bg-gray-100 outline-none"
            />

            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State/District*"
              className="px-4 py-3 rounded-full bg-gray-100 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City*"
              className="px-4 py-3 rounded-full bg-gray-100 outline-none"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location*"
              className="px-4 py-3 rounded-full bg-gray-100 outline-none"
            />
          </div>

          {/* Button */}
          <div className="text-center pt-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full font-semibold transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}