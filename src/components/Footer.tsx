
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-sm font-heading font-bold">МЮ</span>
            </div>
            <Link to="/" className="font-heading font-medium">
              Юрий Марков
            </Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Все права защищены
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="Github"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Github" className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Linkedin" className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
