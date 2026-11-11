import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Work', href: '#work' },
  { label: 'CV', href: '/cv' },
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
            <span className="text-xs font-mono text-muted-foreground">Cybersecurity & WEB</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4 ">
            <button
              onClick={() => scrollToSection('projects')}
              className="relative cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="relative cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="relative cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              Work
            </button>
            <a
              href="/cv"
              className="relative font-mono ml-2 border px-3 py-1.5 text-sm text-foreground hover:bg-accent transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              CV
            </a>
          </div>
          {/* Mobile Menu Button */}
          <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variant="ghost" size="icon"
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border py-2">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    onClick={() => setIsMobileMenuOpen(false)}
                    key={link.label}
                    href={link.href} className="relative px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent after:absolute after:bottom-2 after:left-4 after:h-px after:w-[calc(100%-2rem)] after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
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
