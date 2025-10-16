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
            <p className="text-base sm:text-lg md:text-xl font-medium px-2">
              <span className="code-bracket">{'<'}</span>
              <span className="code-function">Hello</span>
              <span className="text-[#fcfcfa]">, I'm</span>
              <span className="code-bracket">{' />'}</span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#ffd866] tracking-tight px-2 break-words">
              Harry Greentree
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#78dce8] font-light tracking-wide px-2">
              <span className="code-bracket">{'{ '}</span>
              <span className="code-class">Software Developer</span>
              <span className="code-bracket">{' }'}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#939293] max-w-2xl mx-auto leading-relaxed px-4">
            <span className="code-comment">// </span>
            <span className="text-[#fcfcfa]">Building innovative digital experiences with modern technologies.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="code-comment">// </span>
            <span className="text-[#fcfcfa]">Passionate about creating elegant solutions to complex problems.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 px-4 max-w-4xl mx-auto">
            <button
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#ffd866] text-[#2d2a2e] rounded-lg font-medium hover:bg-[#ffed4e] transition-all transform hover:scale-105 shadow-lg tracking-wide border border-[#ffd866] text-sm sm:text-base"
            >
              <span className="code-keyword mr-2">$</span>
              View My Work
            </button>
            <button
              onClick={() => downloadCV()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#78dce8] text-[#78dce8] rounded-lg font-medium hover:bg-[#78dce8] hover:text-[#2d2a2e] transition-all transform hover:scale-105 flex items-center justify-center gap-2 tracking-wide text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="code-function">Download CV</span>
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#ff6188] text-[#ff6188] rounded-lg font-medium hover:bg-[#ff6188] hover:text-[#2d2a2e] transition-all transform hover:scale-105 tracking-wide text-sm sm:text-base"
            >
              <span className="code-keyword">Get In Touch</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 pt-8 px-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border-2 border-[#a9dc76] text-[#a9dc76] hover:bg-[#a9dc76] hover:text-[#2d2a2e] transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border-2 border-[#78dce8] text-[#78dce8] hover:bg-[#78dce8] hover:text-[#2d2a2e] transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 sm:p-3 rounded-full border-2 border-[#ab9df2] text-[#ab9df2] hover:bg-[#ab9df2] hover:text-[#2d2a2e] transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
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
        <ArrowDown className="w-8 h-8 text-[#ffd866]" />
      </button>
    </section>
  );
}
