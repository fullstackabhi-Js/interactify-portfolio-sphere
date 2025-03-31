
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of a customer-facing web application using React, Node.js, and MongoDB, increasing user engagement by 40%.",
        "Implemented GraphQL API endpoints for improved data fetching efficiency and reduced payload sizes by 60%.",
        "Mentored junior developers and conducted code reviews to maintain high code quality standards."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Developed and maintained RESTful APIs using Node.js, Express, and MongoDB.",
        "Built responsive front-end interfaces using React.js and Redux for state management.",
        "Collaborated with UX/UI designers to implement pixel-perfect, accessible user interfaces."
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebTech Services",
      location: "Remote",
      period: "Jul 2018 - Feb 2020",
      description: [
        "Developed and maintained client websites using React.js, HTML5, CSS3, and JavaScript.",
        "Implemented responsive designs and ensured cross-browser compatibility.",
        "Optimized web applications for maximum speed and scalability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-muted z-0"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative z-10 flex flex-col md:flex-row items-start md:items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white"></div>
              
              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-medium mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-foreground/70 mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 list-disc list-inside text-foreground/80">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
