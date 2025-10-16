"use client";

import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { downloadCV } from "@/utils/downloadCV";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
              <span className="code-bracket">{'<'}</span>Hello, I'm<span className="code-bracket">{' />'}</span>
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#181818] dark:text-white tracking-tight">
              Harry Greentree
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
              <span className="code-bracket">{'{ '}</span>
              Software Developer
              <span className="code-bracket">{' }'}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <span className="code-bracket">// </span>
            Building innovative digital experiences with modern technologies.
            Passionate about creating elegant solutions to complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 bg-[#181818] dark:bg-white text-white dark:text-[#181818] rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105 shadow-lg tracking-wide"
            >
              <span className="code-bracket mr-2">$</span>
              View My Work
            </button>
            <button
              onClick={() => downloadCV()}
              className="px-8 py-4 border-2 border-[#181818] dark:border-white text-[#181818] dark:text-white rounded-lg font-medium hover:bg-[#181818] hover:text-white dark:hover:bg-white dark:hover:text-[#181818] transition-all transform hover:scale-105 flex items-center gap-2 tracking-wide"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-[#181818] dark:border-white text-[#181818] dark:text-white rounded-lg font-medium hover:bg-[#181818] hover:text-white dark:hover:bg-white dark:hover:text-[#181818] transition-all transform hover:scale-105 tracking-wide"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-[#181818] dark:border-white text-[#181818] dark:text-white hover:bg-[#181818] hover:text-white dark:hover:bg-white dark:hover:text-[#181818] transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-[#181818] dark:border-white text-[#181818] dark:text-white hover:bg-[#181818] hover:text-white dark:hover:bg-white dark:hover:text-[#181818] transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full border-2 border-[#181818] dark:border-white text-[#181818] dark:text-white hover:bg-[#181818] hover:text-white dark:hover:bg-white dark:hover:text-[#181818] transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8 text-[#181818] dark:text-white" />
      </button>
    </section>
  );
}
