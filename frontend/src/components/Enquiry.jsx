import { useEffect } from "react";
import { Phone, MessageCircle, Mail, MapPin, X } from "lucide-react";

export default function EnquiryPopup({ onClose }) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const phoneNumber = "+916390181919";

  const handleCall = () => {
    window.location.href = `tel:+${+916390181919}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Kidzee Akbarpur, I want enquiry regarding admission. Please provide details."
    );
    window.open(`https://wa.me/${+916390181919}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      {/* CARD */}
      <div className="relative w-full max-w-md rounded-3xl bg-linear-to-br from-violet-400 via-violet-300 to-blue-500 shadow-2xl animate-[fadeIn_.3s_ease]">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/40 backdrop-blur-md w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/60 transition"
        >
          <X size={18} />
        </button>

        {/* CONTENT */}
        <div className="p-6 sm:p-7">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-center text-shadow-black mb-5">
             Enquiry Details
          </h2>

          {/* INFO BOX */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 space-y-3 text-sm text-gray-800 shadow">

            <div className="flex items-start gap-2">
              <Phone className="text-violet-600 animate-bounce" size={18} />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 6390181919</p>
                <p>+91 6391181919</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="text-violet-600 animate-bounce" size={18} />
              <div>
                <p className="font-semibold">Email</p>
                <p>kidzeeakbarpur@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="text-violet-600 animate-bounce" size={18} />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  697, Shastri Nagar, Akbarpur,<br />
                  Ambedkar Nagar, Uttar Pradesh 224122
                </p>
              </div>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-5 flex gap-3">

            <button
              onClick={handleCall}
              className="flex-1 flex items-center justify-center gap-2 bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-xl font-semibold transition transform hover:scale-105"
            >
              <Phone size={18} className="animate-bounce" />
              Call
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition transform hover:scale-105"
            >
              <MessageCircle size={18} className="animate-bounce" />
              WhatsApp
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}