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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#2d2a2e]/95 backdrop-blur-lg border-[#423f43]"
          : "bg-[#2d2a2e]/80 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo with IDE styling */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl sm:text-2xl font-bold text-[#ffd866] hover:text-[#ffed4e] transition-colors tracking-tight flex items-center gap-1 sm:gap-2"
          >
            <span className="text-[#939293]">{'<'}</span>
            <span className="text-[#78dce8]">HG</span>
            <span className="text-[#939293]">{' />'}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm lg:text-base text-[#ff6188] hover:text-[#ffd866] transition-colors font-medium relative group tracking-wide"
              >
                <span className="text-[#939293]">{'<'}</span>
                <span className="mx-1">{link.name}</span>
                <span className="text-[#939293]">{' />'}</span>
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="px-3 lg:px-4 py-2 text-[#ff6188] rounded hover:text-[#ffd866] transition-all font-medium tracking-wide cursor-pointer text-sm lg:text-base group"
              aria-label="Download CV"
            >
              <span className="text-[#939293]">{'<'}</span>
              <span className="mx-1">CV</span>
              <span className="text-[#939293]">{' />'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-[#363337] transition-colors text-[#ffd866]"
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
        <div className="px-4 pt-2 pb-4 space-y-2 bg-[#363337]/95 backdrop-blur-lg border-t border-[#423f43]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-lg text-[#ff6188] hover:bg-[#423f43] hover:text-[#ffd866] transition-colors font-medium text-sm sm:text-base"
            >
              <span className="text-[#939293]">{'<'}</span>
              <span className="mx-1">{link.name}</span>
              <span className="text-[#939293]">{' />'}</span>
            </a>
          ))}
          <button
            onClick={handleDownloadCV}
            className="block w-full text-left px-4 py-3 rounded-lg text-[#ff6188] hover:bg-[#423f43] hover:text-[#ffd866] transition-colors font-medium cursor-pointer text-sm sm:text-base"
          >
            <span className="text-[#939293]">{'<'}</span>
            <span className="mx-1">Download CV</span>
            <span className="text-[#939293]">{' />'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
