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
      "service_km4odue",      // ✅ your service ID
      "template_dhg5ozo",     // ✅ your template ID
      form,
      "yPbwbGe8S1oThjNHg"     // ✅ your public key
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
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Admission Form
      </h2>

      {success && (
        <p className="text-green-600 text-center mb-4">
          ✅ Form Submitted Successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">

        <input name="firstName" value={form.firstName} onChange={handleChange}
          placeholder="First Name*" className="w-full p-2 border rounded" />

        <input name="lastName" value={form.lastName} onChange={handleChange}
          placeholder="Last Name" className="w-full p-2 border rounded" />

        <input name="email" value={form.email} onChange={handleChange}
          placeholder="Email*" className="w-full p-2 border rounded" />

        <input name="mobile" value={form.mobile} onChange={handleChange}
          placeholder="Mobile*" className="w-full p-2 border rounded" />

        <input name="pincode" value={form.pincode} onChange={handleChange}
          placeholder="Pincode" className="w-full p-2 border rounded" />

        <input name="country" value={form.country} onChange={handleChange}
          placeholder="Country" className="w-full p-2 border rounded" />

        <input name="state" value={form.state} onChange={handleChange}
          placeholder="State" className="w-full p-2 border rounded" />

        <input name="city" value={form.city} onChange={handleChange}
          placeholder="City" className="w-full p-2 border rounded" />

        <input name="location" value={form.location} onChange={handleChange}
          placeholder="Location" className="w-full p-2 border rounded" />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

      </form>
    </div>
  );
}