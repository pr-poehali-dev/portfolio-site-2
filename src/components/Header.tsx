
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Работы', href: '#works' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contacts' }
];

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
      <span className="text-lg font-heading font-bold">МЮ</span>
    </div>
    <span className="font-heading font-medium text-lg hidden sm:block">Юрий Марков</span>
  </div>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border py-4">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-foreground hover:text-primary transition-colors font-medium animated-underline py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <button className="block md:hidden" aria-label="Menu">
          <Icon name="Menu" className="w-6 h-6 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
