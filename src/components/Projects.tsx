
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, user authentication, shopping cart, and payment processing. Built with MERN stack and Stripe integration.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media analytics dashboard that integrates with multiple platforms. Features data visualization, user engagement metrics, and scheduled posting.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "D3.js", "Express", "MongoDB", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, task assignments, and progress tracking. Includes email notifications and calendar integration.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80", 
      tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const otherProjects = [
    {
      title: "Weather Forecast App",
      description: "A weather forecast application that provides current and 5-day forecasts based on user location or search.",
      tech: ["React", "OpenWeather API", "Geolocation API"],
      githubLink: "#"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, comments, and user profiles.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "#"
    },
    {
      title: "Recipe Finder",
      description: "Search and save your favorite recipes from a wide collection. Includes filtering by ingredients and dietary restrictions.",
      tech: ["React", "Firebase", "Spoonacular API"],
      githubLink: "#"
    },
    {
      title: "Movie Database",
      description: "Browse and search for movies, view details, and save favorites. Uses the TMDB API for comprehensive movie data.",
      tech: ["React", "TMDB API", "Context API"],
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-12 space-y-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr]'} gap-8 items-center`}
            >
              <div className={`${index % 2 !== 0 && 'md:order-2'}`}>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-foreground/80 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <Github size={20} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
              
              <div className={`${index % 2 !== 0 && 'md:order-1'}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <p className="text-sm opacity-80">{project.tech.join(' • ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mt-20 mb-8">Other Noteworthy Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-foreground/60">
                    {tech}{techIndex < project.tech.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
