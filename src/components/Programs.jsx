import { Baby, Languages, GraduationCap, Users, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'PlayGroup',
    age: '1.5 - 2.5 Years',
    desc: 'A gentle introduction to school life focusing on sensory development and social skills in a secure environment.',
    icon: Baby,
    color: 'bg-green-100 text-green-600',
    border: 'hover:border-green-400'
  },
  {
    title: 'Nursery',
    age: '2.5 - 3.5 Years',
    desc: 'Fostering independence and cognitive skills through engaging play-based activities and early literacy.',
    icon: Languages,
    color: 'bg-blue-100 text-blue-600',
    border: 'hover:border-blue-400'
  },
  {
    title: 'Kindergarten',
    age: '3.5 - 5.5 Years',
    desc: 'Preparing for primary education with a structured curriculum in math, reading, and environmental awareness.',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-600',
    border: 'hover:border-purple-400'
  },
  {
    title: 'Teacher Training',
    age: 'For Adults',
    desc: 'Empowering passionate educators with modern teaching methodologies and early childhood care techniques.',
    icon: Users,
    color: 'bg-orange-100 text-orange-600',
    border: 'hover:border-orange-400'
  }
];

export default function Programs() {
  return (
    <section id="programmes" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-bg-light to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative inline-block">
            Our Programmes
             <span className="absolute -bottom-3 left-1/4 w-1/2 h-1.5 bg-secondary rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            We offer age-appropriate programs designed to foster holistic development and a lifelong love for learning in every child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className={`bg-bg-light rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2 group border-2 border-transparent ${program.border} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full opacity-40 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${program.color} group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm`}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">{program.title}</h3>
                <span className="inline-block bg-white text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5 shadow-sm relative z-10 border border-gray-100">
                  {program.age}
                </span>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 relative z-10">
                  {program.desc}
                </p>
                <a href="#" className="font-bold text-accent group-hover:text-primary transition-colors flex items-center gap-2 relative z-10">
                  Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
