
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              &copy; {new Date().getFullYear()} • Full-Stack Developer Portfolio
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-foreground/70 hover:text-primary transition-colors"
          >
            <span className="mr-2">Back to Top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
