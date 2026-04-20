import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Work', href: '#work' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className=" max-w-3xl mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-xl text-foreground">Adilkhan Ersin</h1>
            <span className="text-xs font-mono text-muted-foreground">Cybersecurity & SE</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4 ">
            <button
              onClick={() => scrollToSection('projects')}
              className="cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </button>
          </div>
          {/* Mobile Menu Button */}
          <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant="ghost" size="icon" 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border p-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    key={link.label}
                    href={link.href} className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
