import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';
import About from './components/About';

// Pages
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import Videos from './pages/Videos';
import Login from './pages/Login'; // 
import Admin from "./pages/Admin";
import AdminVideo from "./pages/AdminVideo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🏠 Home Page
function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />
      
      <main className="flex-grow pt-[72px] md:pt-[88px] relative overflow-hidden bg-white">
        
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="programmes">
          <Programs />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
}

// 🎯 Main App
function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/videos" element={<Videos />} />

        {/* Admin Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/videos" element={<AdminVideo />} />

      </Routes>
    </Router>
  );
}

export default App;