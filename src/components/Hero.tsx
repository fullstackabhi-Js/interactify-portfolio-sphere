
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div 
          className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
            Hello, I'm
          </h2>
        </div>
        
        <div 
          className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Full-Stack Developer
          </h1>
        </div>
        
        <div 
          className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-8">
            I build exceptional and accessible digital experiences for the web.
            Specialized in the MERN stack with a passion for creating innovative solutions.
          </p>
        </div>
        
        <div 
          className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center text-foreground/70 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Background element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
