"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:your.email@example.com",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <button
              onClick={scrollToTop}
              className="text-xl sm:text-2xl font-bold text-accent hover:opacity-80 transition-opacity tracking-tight"
            >
              <span className="code-bracket">{'<'}</span>
              <span className="code-keyword">Harry Greentree</span>
              <span className="code-bracket">{' />'}</span>
            </button>
            <p className="text-sm sm:text-base text-text-muted max-w-xs mx-auto sm:mx-0">
              <span className="code-comment">{'// '}</span>
              <span className="text-foreground">Building innovative digital experiences with passion and precision.</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-accent">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">quickLinks</span>
            </h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm sm:text-base text-text-muted hover:text-green transition-colors w-fit mx-auto sm:mx-0"
                >
                  <span className="text-text-muted mr-2">{index + 1}.</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-accent">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">social</span>
            </h3>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-full border border-border text-blue hover:bg-blue hover:text-background hover:border-blue transition-all transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-text-muted text-xs sm:text-sm flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
              <span className="code-comment">{'/* '}</span>
              <span>© {currentYear} Harry Greentree. All rights reserved.</span>
              <span className="code-comment">{' */'}</span>
            </p>
            <p className="text-text-muted text-xs sm:text-sm">
              <span className="code-comment">{'// '}</span>
              <span className="text-foreground">Made with </span>
              <span className="text-green">Next.js</span>
              <span className="text-foreground"> + </span>
              <span className="text-blue">TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
