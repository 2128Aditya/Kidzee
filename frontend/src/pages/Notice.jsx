import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BASE_URL from "../api";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/notices`)
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA 👉", data);
        setNotices(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleNotice = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #faf7ff, #ede9fe)"
      }}
    >
      <Header />

      <div className="flex-grow pt-[110px] px-4 md:px-10 flex justify-center">
        
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-2xl border border-purple-200 rounded-[30px] shadow-[0_25px_80px_rgba(124,58,237,0.25)] p-10">

          {/* TITLE */}
          <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12 tracking-wide">
            📢 Notice Board
          </h1>

          <div className="space-y-6">
            {notices.length > 0 ? (
              notices.map((note, index) => {

                const isLatest = index === 0;

                return (
                  <div
                    key={note._id}
                    className="group rounded-2xl overflow-hidden border border-purple-100 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >

                    {/* HEADER */}
                    <div
                      onClick={() => toggleNotice(index)}
                      className={`cursor-pointer px-6 py-5 flex justify-between items-center transition-all duration-300
                      ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white"
                          : "bg-white text-gray-800 group-hover:bg-purple-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-wrap">

                        <span className="font-semibold text-lg md:text-xl">
                          {note.title || "No Title"}
                        </span>

                        {/* NEW BADGE */}
                        {isLatest && (
                          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow">
                            NEW
                          </span>
                        )}
                      </div>

                      <span className="text-2xl font-bold">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? "max-h-80 py-5 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                        {note.message || note.description || "No Description"}
                      </p>

                      {/* DATE */}
                      <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-3">
                        <span className="flex items-center gap-1">
                          📅 {new Date(note.createdAt).toLocaleDateString("en-IN")}
                        </span>

                        <span className="flex items-center gap-1">
                          ⏰ {new Date(note.createdAt).toLocaleTimeString("en-IN", { timeStyle: "short" })}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 text-lg">
                🚫 No notices available
              </p>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notice;