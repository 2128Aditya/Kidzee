export default function Hero() {
  return (
    <>
      {/* 1. CUSTOM FORMAT BANNER (As specified by user image) */}
      <section className="bg-white pt-6 pb-2 relative z-20 shadow-sm border-b-8 border-b-primary flex flex-col mt-[60px]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #6B3A94 2px, transparent 2px)", backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-row items-center justify-between mb-4 mt-2">
             {/* Pentemind Logo */}
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-yellow-400 to-blue-600 flex items-center justify-center shadow-lg transform -rotate-12 outline outline-4 outline-white">
                   <span className="text-white text-xl md:text-3xl font-black">🧠</span>
                </div>
                <div className="mt-2 text-center pointer-events-none">
                  <span className="font-extrabold text-[9px] md:text-xs text-primary uppercase tracking-widest block">Péntemind</span>
                  <span className="text-[7px] md:text-[9px] font-semibold text-gray-500">The Learning Minds</span>
                </div>
             </div>

             {/* Center Main Kidzee Format */}
             <div className="text-center w-full max-w-2xl relative z-10 -mt-6">
                 <h1 className="text-[3.5rem] md:text-[6rem] font-black italic tracking-tighter" style={{ color: '#6B3A94', WebkitTextStroke: '3px #FFC107', textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    KIDZEE
                 </h1>
                 <div className="inline-block bg-white px-4 pb-0 pt-1 -mt-6 md:-mt-10 relative z-20 mx-auto">
                    <h2 className="text-lg md:text-2xl font-black text-primary tracking-widest uppercase mb-0">Pre-School</h2>
                    <div className="w-full h-[1px] bg-gray-300 my-1"></div>
                    <p className="text-[9px] md:text-xs font-bold text-gray-600 tracking-[0.3em] uppercase">Nurturing Gen-Next</p>
                 </div>
             </div>

             {/* ZeeLearn Logo */}
             <div className="flex flex-col items-center pb-4">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#1daef0] shadow-xl flex items-center justify-center text-white border-2 border-white relative overflow-hidden">
                   <div className="absolute inset-0 bg-white opacity-20 transform -rotate-45 translate-y-6"></div>
                   <span className="font-extrabold text-[10px] md:text-xs tracking-widest relative z-10 drop-shadow-md">ZEELEARN</span>
                </div>
             </div>
          </div>
        </div>
        <div className="absolute bottom-[-8px] left-0 w-[45%] h-2 bg-secondary z-30"></div>
      </section>

      {/* 2. ADMISSION HERO SECTION (Mirroring kidzee7310.kidzee.com layout) */}
      <section className="relative w-full min-h-[500px] md:h-[650px] flex items-center overflow-hidden bg-gray-100">
         {/* Background Image (The School Gate image provided by user) */}
         <div className="absolute inset-0 z-0">
           <img 
             src="/assets/new color code ajs_page-0001.jpg" 
             alt="School Background" 
             className="w-full h-full object-cover"
             onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80'; }} 
           />
           {/* Dark overlay to make form pop and text readable if any */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
         </div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row justify-between items-center h-full gap-8 py-12 md:py-0">
            
            {/* Left side text snippet (Optional, to balance the form) */}
            <div className="text-white max-w-lg hidden md:block">
               <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">Welcome to the World of Kidzee</h3>
               <p className="text-lg text-white/90 drop-shadow-md">Asia's largest preschool network. Enroll your child today and build their foundation for a beautiful tomorrow.</p>
            </div>

            {/* Right Side: Quick Admission Form (from reference site) */}
            <div className="w-full max-w-sm bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl relative w-full border-t-[6px] border-secondary animate-in fade-in slide-in-from-bottom-10 duration-700">
               <div className="absolute -top-5 left-8 bg-secondary text-primary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-md">
                 Enroll Now
               </div>
               <h2 className="text-2xl font-bold text-primary mb-1 mt-2">Quick Admission</h2>
               <p className="text-gray-500 text-xs mb-6 pb-4 border-b border-gray-100">Leave your details and we will contact you</p>
               
               <form className="flex flex-col gap-4">
                 <div>
                   <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm placeholder-gray-400" placeholder="Full Name *" required />
                 </div>
                 <div>
                   <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm placeholder-gray-400" placeholder="Email Address *" required />
                 </div>
                 <div>
                   <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm placeholder-gray-400" placeholder="Mobile Number *" required />
                 </div>
                 <div>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm text-gray-500 appearance-none">
                      <option value="" disabled selected>Select Program *</option>
                      <option>PlayGroup</option>
                      <option>Nursery</option>
                      <option>Kindergarten</option>
                    </select>
                 </div>
                 <button type="submit" className="mt-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#52297A] transition-colors shadow-lg hover:shadow-xl w-full text-sm uppercase tracking-wider">
                    Submit Details
                 </button>
               </form>
            </div>
         </div>
      </section>
    </>
  );
}
