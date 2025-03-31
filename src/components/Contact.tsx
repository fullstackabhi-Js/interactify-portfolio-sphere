
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              I'm currently open to new opportunities and collaborations. Whether you have a 
              project in mind or just want to connect, feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground/70 mb-1">Email</h4>
                  <a href="mailto:hello@yourname.com" className="text-lg hover:text-primary">
                    hello@yourname.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground/70 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-lg hover:text-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-lg mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
