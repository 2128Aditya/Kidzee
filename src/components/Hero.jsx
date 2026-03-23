import { Brain, GraduationCap, ShieldCheck, Users, Replace } from 'lucide-react';

export default function Hero() {
  const features = [
    { icon: <Brain size={26} className="text-[#6B3A94]" />, title: "Holistic", subtitle: "Learning" },
    { icon: <GraduationCap size={26} className="text-[#6B3A94]" />, title: "Expert", subtitle: "Educators" },
    { icon: <ShieldCheck size={26} className="text-[#6B3A94]" />, title: "Safe and", subtitle: "Secure" },
    { icon: <Users size={26} className="text-[#6B3A94]" />, title: "Parental", subtitle: "Involvement" },
    { icon: <Replace size={26} className="text-[#6B3A94]" />, title: "Smooth", subtitle: "Transition" }
  ];

  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-[600px]">
      {/* Left Column (Light Background) */}
      <div className="w-full md:w-[70%] bg-[#F3EBF9] relative p-6 md:p-12 lg:p-20 flex flex-col justify-center overflow-hidden">
        {/* Decorative Background Elements */}
        {/* Left red smiling heart */}
        <div className="absolute top-1/4 left-10 md:left-20 w-16 h-16 bg-[#E63946] rounded-full rotate-[-15deg] shadow-lg flex items-center justify-center opacity-90 z-0">
           <span className="text-white text-2xl font-bold">:)</span>
           <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full"></div>
           <div className="absolute -top-1 -left-1 w-6 h-6 bg-white rounded-full"></div>
        </div>
        {/* Yellow smiling face */}
        <div className="absolute top-1/2 right-[10%] md:right-[30%] w-16 h-16 bg-[#FFC107] rounded-full shadow-lg flex items-center justify-center z-30 opacity-90">
           <span className="text-[#4A2B66] text-2xl font-bold">:)</span>
        </div>
        {/* Simple decorative stars/shapes */}
        <div className="absolute top-10 left-1/3 text-6xl text-white opacity-80 z-0">✦</div>
        <div className="absolute bottom-1/4 left-10 text-6xl text-[#6B3A94] opacity-20 z-0">✷</div>
        <div className="absolute bottom-10 right-1/4 w-32 h-16 rounded-t-full bg-[#FF8FA3] opacity-60 z-0"></div>
        <div className="absolute bottom-5 left-1/4 w-32 h-20 rounded-t-full bg-[#6B3A94] opacity-80 z-0"></div>
        
        <div className="relative z-10 flex flex-col xl:flex-row items-center gap-10 lg:gap-16">
          {/* Circular Image Cutout */}
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-[12px] border-white shadow-xl overflow-hidden shrink-0 relative flex justify-center items-center bg-gray-200 z-20">
             {/* Note: I'm using an Unsplash placeholder of a smiling student to approximate the kid in the image */}
             <img 
               src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=800" 
               alt="Happy Student" 
               className="w-full h-full object-cover"
             />
          </div>

          {/* Text Content */}
          <div className="flex flex-col flex-grow items-center xl:items-start text-center xl:text-left z-10 max-w-xl">
            <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-black text-[#5C4073] mb-4 tracking-tight drop-shadow-sm w-full">
              Build A Foundation <br className="hidden md:block" />
              For A Lifetime Of <br className="hidden md:block" />
              Learning
            </h1>
            
            <h2 className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-black text-[#E63946] mb-4 drop-shadow-sm uppercase tracking-wider w-full">
              ADMISSIONS OPEN
            </h2>
            
            <div className="text-[#845E9F] font-bold text-lg md:text-2xl mb-8 leading-relaxed w-full">
               <span className="inline-block px-2">Playgroup</span>|<span className="inline-block px-2">Nursery</span>|<span className="inline-block px-2">Jr. K.G.</span><br/>
               <span className="inline-block px-2">Sr. K.G.</span>|<span className="inline-block px-2">Grade 1 and 2</span>
            </div>

            {/* Feature Boxes */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-3 w-full">
               {features.map((feature, idx) => (
                 <div key={idx} className="bg-white rounded-[20px] p-2 flex flex-col items-center w-[85px] md:w-[105px] h-[100px] md:h-[120px] shadow-sm border border-purple-100 hover:-translate-y-1 transition-transform relative z-20">
                   <div className="mb-2 md:mb-3 mt-1 md:mt-2 text-primary">{feature.icon}</div>
                   <span className="text-[10px] md:text-xs font-bold text-[#5C4073] text-center leading-tight">
                     {feature.title} <br/> {feature.subtitle}
                   </span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column (Dark Purple Background) */}
      <div className="w-full md:w-[30%] bg-[#6B3A94] p-8 md:p-12 flex items-center justify-center relative shadow-inner z-10">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 2px, transparent 2px)", backgroundSize: '20px 20px' }}></div>
         
         {/* Simplified Admission Card */}
         <div className="bg-white px-8 py-12 rounded-[24px] shadow-2xl relative z-10 w-full max-w-[350px] text-center transform hover:scale-[1.02] transition-transform duration-300 border-b-8 border-secondary">
            <h3 className="text-[2rem] font-bold text-[#6B3A94] mb-8">Admission</h3>
            
            <div className="bg-[#F3EBF9] p-6 rounded-2xl mb-8 border border-purple-100">
               <p className="text-[#6B3A94] font-medium text-lg leading-relaxed">
                  Join Kidzee today to give your child the best start in their educational journey!
               </p>
            </div>
            
            <button className="w-full bg-[#6B3A94] hover:bg-[#52297A] text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all text-xl uppercase tracking-wider">
               Admission Open
            </button>
         </div>
      </div>
    </section>
  );
}
