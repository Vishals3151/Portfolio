import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { NAV_ITEMS, HERO_DATA, SOCIALS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const githubLink = SOCIALS.find(s => s.platform === 'GitHub')?.url || '#';
  const logoName = HERO_DATA.name.toUpperCase();
  const initial = logoName.charAt(0);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg shadow-white/5">
              {initial}
            </div>
            <span className="text-xl font-bold text-white tracking-widest hidden sm:block">
              {logoName}
            </span>
          </div>
          
          {/* Desktop Navigation Pill */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-1.5 py-1.5 shadow-2xl shadow-black/50">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 rounded-full"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side: Github & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a 
              href={githubLink}
              target="_blank"
              rel="noreferrer" 
              className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
            >
              <Github size={20} fill="currentColor" />
              <span>GITHUB</span>
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-800/80 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 absolute top-full left-0 w-full shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-800">
                <a 
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-slate-950 w-full py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors"
                >
                    <Github size={20} fill="currentColor" />
                    <span>GITHUB</span>
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;