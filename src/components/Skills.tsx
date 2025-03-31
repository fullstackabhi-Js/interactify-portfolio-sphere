
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Server, 
  Database, 
  Layout, 
  Code,
  GitBranch,
  Terminal,
  Settings,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-10 h-10 text-primary" />,
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "Tailwind CSS", "Material UI"]
    },
    {
      title: "Backend",
      icon: <Server className="w-10 h-10 text-primary" />,
      skills: ["Node.js", "Express.js", "REST API", "GraphQL", "Authentication", "JWT", "Socket.io"]
    },
    {
      title: "Database",
      icon: <Database className="w-10 h-10 text-primary" />,
      skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis", "Data Modeling"]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="w-10 h-10 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Netlify", "Heroku", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">MERN Stack Specialist</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-lg bg-white/80 shadow-sm">
              <Database className="w-10 h-10 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">MongoDB</h4>
            </div>
            <div className="p-4 rounded-lg bg-white/80 shadow-sm">
              <Server className="w-10 h-10 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">Express.js</h4>
            </div>
            <div className="p-4 rounded-lg bg-white/80 shadow-sm">
              <Code className="w-10 h-10 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">React.js</h4>
            </div>
            <div className="p-4 rounded-lg bg-white/80 shadow-sm">
              <Settings className="w-10 h-10 mx-auto mb-2 text-primary" />
              <h4 className="font-medium">Node.js</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
