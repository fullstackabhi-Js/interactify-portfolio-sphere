
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Full-Stack Developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
              I enjoy creating scalable and performant web applications that solve real-world problems.
            </p>
            
            <p className="text-lg">
              With a strong foundation in both frontend and backend development, I bridge the gap between 
              design and functionality to deliver seamless user experiences. I'm constantly exploring new 
              technologies and methodologies to enhance my development skills.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me reading tech blogs, contributing to open-source projects, 
              or exploring the outdoors to recharge my creative batteries.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-secondary/20 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80" 
                  alt="Coding on laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
