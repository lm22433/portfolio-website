"use client";

import { GithubIcon, LinkedinIcon, Mail, Download, Code2, Zap } from "lucide-react";
import { openCV } from "@/utils/openCV";
import IDEWindow from "./IDEWindow";
import TypewriterCode from "./TypewriterCode";

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
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3 animate-fade-in-up">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent tracking-tight break-words">
                  Harry<br className="hidden sm:block" /> Greentree
                </h1>
              </div>

              <p className="text-base md:text-lg text-blue font-medium">
                <span className="code-bracket">{'{ '}</span>
                <span className="code-class">Software Engineer</span>
                <span className="code-bracket">{' }'}</span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm md:text-base text-text-muted leading-relaxed font-mono">
                <span className="code-comment">{`// `}</span>
                <span className="text-foreground">Crafting beautiful, functional digital solutions</span>
              </p>
              <p className="text-sm md:text-base text-text-muted leading-relaxed font-mono">
                <span className="code-comment">{`// `}</span>
                <span className="text-foreground">Full-stack developer specializing in modern web technologies</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => scrollToSection("#projects")}
                className="group px-8 py-3 border-2 border-accent text-accent rounded-lg font-medium tracking-wide text-sm md:text-base hover:bg-accent/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Code2 className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  View My Work
                </span>
              </button>
              <button
                onClick={() => openCV()}
                className="group px-8 py-3 border-2 border-blue text-blue rounded-lg font-medium tracking-wide text-sm md:text-base hover:bg-blue/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </span>
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="group px-8 py-3 border-2 border-pink text-pink rounded-lg font-medium tracking-wide text-sm md:text-base hover:bg-pink/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </span>
              </button>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg border border-green/50 text-green hover:bg-green/10 hover:border-green transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg border border-blue/50 text-blue hover:bg-blue/10 hover:border-blue transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="group p-3 rounded-lg border border-purple/50 text-purple hover:bg-purple/10 hover:border-purple transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col">
            <IDEWindow
              title="developer.ts"
              className="backdrop-blur-sm border-2 border-border/50 overflow-hidden"
            >
              <div className="p-6 text-sm">
                <TypewriterCode
                  className="leading-6"
                  typingSpeed={16}
                  startDelay={500}
                  pauseAtEnd={1000}
                  loop={true}
                  tokens={[
                    { text: "const ", className: "code-keyword" },
                    { text: "developer ", className: "text-foreground" },
                    { text: "= ", className: "code-bracket" },
                    { text: "{\n", className: "code-bracket" },

                    { text: "  name", className: "code-function" },
                    { text: ":", className: "code-bracket" },
                    { text: " \"Harry Greentree\"", className: "code-string" },
                    { text: ",\n", className: "code-bracket" },

                    { text: "  age", className: "code-function" },
                    { text: ":", className: "code-bracket" },
                    { text: " 22", className: "code-number" },
                    { text: ",\n", className: "code-bracket" },

                    { text: "  location", className: "code-function" },
                    { text: ":", className: "code-bracket" },
                    { text: " \"Southampton, UK\"", className: "code-string" },
                    { text: ",\n", className: "code-bracket" },

                    { text: "  hasJob", className: "code-function" },
                    { text: ":", className: "code-bracket" },
                    { text: " true", className: "code-boolean" },
                    { text: ",\n", className: "code-bracket" },

                    { text: "  role", className: "code-function" },
                    { text: ":", className: "code-bracket" },
                    { text: " \"Software Engineer\"", className: "code-string" },
                    { text: ",\n", className: "code-bracket" },

                    { text: "  interests", className: "code-function" },
                    { text: ":", className: "code-bracket" },
                    { text: " [\n", className: "text-foreground" },

                    { text: "    \"Programming\"", className: "code-string" },
                    { text: ",\n", className: "code-bracket" },
                    { text: "    \"Gaming\"\n", className: "code-string" },

                    { text: "  ]\n", className: "text-foreground" },
                    { text: "}", className: "code-bracket" },
                    { text: ";", className: "code-bracket" },
                  ]}
                />
              </div>
            </IDEWindow>
          </div>
        </div>
      </div>
    </section>
  );
}
