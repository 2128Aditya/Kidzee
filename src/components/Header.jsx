import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
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
    { name: 'Notice', path: '#notice' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Video', path: '#video' },
    { name: 'Facilities', path: '#facilities' },
    { name: 'Social Wall', path: '#social' },
    { name: 'FAQs', path: '#faqs' },
    { name: 'Blog', path: '#blog' },
    { name: 'Testimonial', path: '#testimonial' },
    { name: 'Contact Us', path: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? 'bg-primary py-1' : 'bg-primary py-2'}`}>
      <div className="container mx-auto px-2 flex justify-between items-center w-full max-w-[1400px]">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md p-1">
             <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center font-black text-primary text-xl">
               K
             </div>
          </div>
          <span className="text-white font-black text-2xl tracking-widest hidden sm:block">KIDZEE</span>
        </a>

        {/* Desktop Nav - Mirroring reference site exactly */}
        <nav className="hidden xl:flex gap-x-4 items-center flex-wrap justify-end flex-grow ml-4">
          {navLinks.map((link) => {
             return (
               <a 
                  key={link.name} 
                  href={link.path} 
                  className={`font-semibold transition-colors text-[11px] uppercase tracking-wider relative group whitespace-nowrap text-white hover:text-secondary`}
               >
                 {link.name}
                 <span className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all w-0 group-hover:w-full`}></span>
               </a>
             )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="xl:hidden text-white hover:text-secondary transition-colors ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`xl:hidden absolute top-full left-0 w-full bg-primary shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] py-2 border-t border-white/10 overflow-y-auto' : 'max-h-0 py-0'}`}>
         <div className="container mx-auto px-4 flex flex-col">
            {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.path} 
                 className="text-white hover:text-secondary font-medium transition-colors border-b border-white/5 py-3 pl-2 text-sm uppercase" 
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
            ))}
         </div>
      </div>
    </header>
  );
}
