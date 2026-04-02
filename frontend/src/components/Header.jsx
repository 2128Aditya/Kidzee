import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Header({ setShowForm }) {   // ✅ prop added
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Programmes', path: '#programmes' },
    { name: 'Notice', path: '/notice' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Video', path: '/videos' },
    { name: 'Facilities', path: '#facilities' },
    { name: 'Social Wall', path: '#social' },
    { name: 'FAQs', path: '#faqs' },
    { name: 'Blog', path: '#blog' },
    { name: 'Testimonial', path: '#testimonial' },
    { name: 'Contact Us', path: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? 'bg-primary py-1' : 'bg-primary py-2'}`}>
      <div className="w-full px-4 md:px-12 lg:px-20 flex justify-between items-center h-full">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
          <div className="h-16 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
            <img src="/assets/logo.jpg" alt="Kidzee Logo" className="h-full w-auto object-contain" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden min-[748px]:flex min-[748px]:gap-x-3 min-[1048px]:gap-x-4 min-[1224px]:gap-x-5 min-[1440px]:gap-x-6 items-center flex-wrap justify-end flex-grow ml-2 mr-4">
          {navLinks.map((link) => {
            let visibilityClass = "";

            if (['Home', 'About Us', 'Notice'].includes(link.name)) {
              visibilityClass = "min-[748px]:block";
            } else if (['Programmes', 'FAQs'].includes(link.name)) {
              visibilityClass = "hidden min-[1048px]:block";
            } else if (['Gallery', 'Facilities', 'Contact Us'].includes(link.name)) {
              visibilityClass = "hidden min-[1224px]:block";
            } else {
              visibilityClass = "hidden min-[1412px]:block";
            }

            if (link.name === "Notice" || link.name === "Gallery" || link.name === "Video") {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-heading font-bold text-[12px] uppercase text-white hover:text-secondary ${visibilityClass}`}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <a
                key={link.name}
                href={link.path}
                className={`font-heading font-bold text-[12px] uppercase text-white hover:text-secondary ${visibilityClass}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* 🔥 ENROLL BUTTON (ONLY CHANGE) */}
        <button
          onClick={() => setShowForm(true)}
          className="hidden md:inline-flex items-center justify-center bg-secondary text-primary font-bold px-6 py-2 rounded-full hover:bg-purple-900 hover:text-white transition-all uppercase text-sm tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-auto xl:ml-0 mr-4 xl:mr-0 z-10 group/enroll"
        >
          Enroll Now
          <ArrowRight className="ml-2 w-0 h-5 opacity-0 group-hover/enroll:w-5 group-hover/enroll:opacity-100 transition-all duration-300 ease-out" />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="min-[1223px]:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${isMobileMenuOpen ? 'max-h-[80vh]' : 'max-h-0'} min-[1224px]:hidden overflow-hidden bg-primary transition-all`}>
        <div className="px-4 flex flex-col">
          {navLinks.map((link) =>
            link.name === "Notice" || link.name === "Gallery" || link.name === "Video" ? (
              <Link key={link.name} to={link.path}>{link.name}</Link>
            ) : (
              <a key={link.name} href={link.path}>{link.name}</a>
            )
          )}

          {/* Mobile Enroll */}
          <button
            onClick={() => {
              setShowForm(true);
              setIsMobileMenuOpen(false);
            }}
            className="bg-secondary text-primary py-2 rounded mt-3"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
}