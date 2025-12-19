import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Heart,
  Mail,
  ArrowUp,
} from "lucide-react";
import { SOCIALS, NAV_ITEMS, HERO_DATA } from "../constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size={20} />;
      case "Linkedin":
        return <Linkedin size={20} />;
      case "Twitter":
        return <Twitter size={20} />;
      case "Instagram":
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900 relative">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {HERO_DATA.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with a focus on performance,
              accessibility, and user-centric design.
            </p>
            <div className="flex gap-4 pt-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300 border border-slate-800"
                  aria-label={social.platform}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">
                Feel free to reach out for collaborations or just a friendly
                hello.
              </p>
              <a
                href="mailto:vishalsureshgaikwad115@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group"
              >
                <Mail size={18} className="group-hover:animate-bounce" />
                <span className="text-sm">
                  vishalsureshgaikwad115@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} {HERO_DATA.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-primary transition-all border border-slate-800"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
