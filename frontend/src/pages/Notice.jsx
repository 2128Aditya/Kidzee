import Header from "../components/Header";
import Footer from "../components/Footer";

const Notice = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <div className="flex-grow pt-[80px] px-4 md:px-10 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Notice Board 📢
        </h1>

        <div className="bg-black/50 p-6 rounded-xl space-y-4">
          <p>📌 Admission Open 2026-27</p>
          <p>📌 Annual Function on 25th March </p>
          <p>📌 Holiday on Sunday</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notice;