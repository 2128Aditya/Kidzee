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
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <div className="flex-grow pt-[100px] px-4 md:px-10 flex justify-center">
        
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">

          {/* TITLE */}
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 tracking-wide">
            📢 Notice Board
          </h1>

          <div className="space-y-5">
            {notices.length > 0 ? (
              notices.map((note, index) => {

                // 🔥 Latest notice = index 0 (kyunki backend me sort already hai)
                const isLatest = index === 0;

                return (
                  <div
                    key={note._id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                  >

                    {/* TITLE */}
                    <div
                      onClick={() => toggleNotice(index)}
                      className={`cursor-pointer px-5 py-4 flex justify-between items-center transition-all duration-300
                      ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
                          : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        <span className="font-semibold text-lg">
                          {note.title || "No Title"}
                        </span>

                        {/* 🔥 NEW BADGE */}
                        {isLatest && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>

                      <span className="text-2xl font-bold">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <div
                      className={`px-5 overflow-hidden transition-all duration-500 ${
                        activeIndex === index
                          ? "max-h-60 py-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {note.message || note.description || "No Description"}
                      </p>

                      {/* DATE */}
                      <p className="text-sm text-gray-500 mt-2">
                        📅 {new Date(note.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short"
                        })}
                      </p>
                    </div>

                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-600 text-lg">
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