"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { downloadCV } from "@/utils/downloadCV";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(globalThis.scrollY > 20);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsOpen(false);
    }
  };

  const handleDownloadCV = () => {
    downloadCV();
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#181818]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold text-[#181818] dark:text-white hover:opacity-80 transition-opacity tracking-tight"
          >
            <span className="opacity-50">{'<'}</span>
            Portfolio
            <span className="opacity-50">{' />'}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#181818] dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium relative group tracking-wide"
              >
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">{'> '}</span>
                {link.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="text-[#181818] dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium relative group tracking-wide cursor-pointer"
              aria-label="Download CV"
            >
              <span className="opacity-50 group-hover:opacity-100 transition-opacity">{'> '}</span>
              CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 dark:bg-[#181818]/95 backdrop-blur-lg shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-lg text-[#181818] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleDownloadCV}
            className="block w-full text-left px-4 py-3 rounded-lg text-[#181818] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium cursor-pointer"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
}
