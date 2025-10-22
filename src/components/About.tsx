"use client";

import { Award } from "lucide-react";
import IDEWindow from "./IDEWindow";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  const awards = [
    {
      title: 'CSS GameJam "Best Narative" Award',
      issuer: "University of Bristol Computer Science Society (CSS)",
      date: "Oct 2023",
    },
    {
      title: 'CSS BrisHack "Best Wearable Tech" Award',
      issuer: "University of Bristol Computer Science Society (CSS)",
      date: "Feb 2024",
    },
    {
      title: "Highest Software Engineering Project Mark in Year 2 2024",
      issuer: "University of Bristol",
      date: "Sep 2024",
    },
    {
      title: 'CSS GameJam "People\'s Choice" Award',
      issuer: "University of Bristol Computer Science Society (CSS)",
      date: "Oct 2024",
    },
    {
      title: "HPC Student Prize Award Runner-Up 2025",
      issuer: "University of Bristol & Numerical Algorithms Group (NAG)",
      date: "Jul 2025",
    },
    {
      title: "Highest Group Project Mark in Year 3 on the MEng Programme 2025",
      issuer: "University of Bristol",
      date: "Sep 2025",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background-lighter"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-accent mb-3 tracking-tight px-4">
            <span className="code-bracket">{"< "}</span>
            <span className="code-keyword">About Me</span>
            <span className="code-bracket">{" />"}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <IDEWindow title="bio.md">
            <div className="p-6 font-mono text-sm">
              <div className="space-y-1">
                <div>
                  <span className="text-blue">#</span>
                  <span className="text-foreground"> About Me</span>
                </div>

                <div className="pl-0">
                  <span className="text-foreground">
                    I'm a passionate full-stack developer creating beautiful,
                    functional, and user-friendly applications. I focus on
                    performance, accessibility, and developer experience.
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-blue">##</span>
                  <span className="text-foreground"> Focus</span>
                </div>

                <div>
                  <span className="text-blue">-</span>
                  <span className="text-foreground">
                    {" "}
                    Building modern web applications
                  </span>
                </div>
                <div>
                  <span className="text-blue">-</span>
                  <span className="text-foreground">
                    {" "}
                    Performance, scalability, and great UX
                  </span>
                </div>
                <div>
                  <span className="text-blue">-</span>
                  <span className="text-foreground">
                    {" "}
                    Collaboration, mentorship, and clear communication
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-foreground">Current stack: </span>
                  <span className="code-bracket">`</span>
                  <span className="code-string">Next.js</span>
                  <span className="code-bracket">`</span>
                  <span className="text-foreground">, </span>
                  <span className="code-bracket">`</span>
                  <span className="code-string">TypeScript</span>
                  <span className="code-bracket">`</span>
                  <span className="text-foreground">, </span>
                  <span className="code-bracket">`</span>
                  <span className="code-string">Tailwind CSS</span>
                  <span className="code-bracket">`</span>
                </div>
              </div>
            </div>
          </IDEWindow>

          <IDEWindow title="technologies.ts">
            <div className="p-6 font-mono text-sm">
              <div className="space-y-1">
                <div className="mb-2">
                  <span className="code-comment">{"/* "}</span>
                  <span className="code-comment">
                    Proficient across a broad range of software tools,
                    frameworks, and programming languages
                  </span>
                  <span className="code-comment">{" */"}</span>
                </div>
                <div>
                  <span className="code-keyword">const</span>
                  <span className="text-foreground"> technologies </span>
                  <span className="code-bracket">=</span>
                  <span className="text-foreground"> </span>
                  <span className="code-bracket">{`{`}</span>
                </div>

                <div className="pl-4 space-y-1">
                  <div>
                    <span className="code-string">"Programming Languages"</span>
                    <span className="code-bracket">:</span>
                    <span className="text-foreground"> [</span>
                    <span className="code-string">"C"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "C++"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "C#"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Java"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Python"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Go"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Rust"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Haskell"</span>
                    <span className="text-foreground">]</span>
                    <span className="code-bracket">,</span>
                  </div>
                  <div>
                    <span className="code-string">"Web Development"</span>
                    <span className="code-bracket">:</span>
                    <span className="text-foreground"> [</span>
                    <span className="code-string">"HTML"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "CSS"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "JavaScript"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "TypeScript"</span>
                    <span className="text-foreground">]</span>
                    <span className="code-bracket">,</span>
                  </div>
                  <div>
                    <span className="code-string">"Frameworks"</span>
                    <span className="code-bracket">:</span>
                    <span className="text-foreground"> [</span>
                    <span className="code-string">"Spring Boot"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string">" React"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Next.js"</span>
                    <span className="text-foreground">]</span>
                    <span className="code-bracket">,</span>
                  </div>
                  <div>
                    <span className="code-string">"Databases"</span>
                    <span className="code-bracket">:</span>
                    <span className="text-foreground"> [</span>
                    <span className="code-string">"PostgreSQL"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "MySQL"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "MongoDB"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Redis"</span>
                    <span className="text-foreground">]</span>
                    <span className="code-bracket">,</span>
                  </div>
                  <div>
                    <span className="code-string">
                      "DevOps & Containerisation"
                    </span>
                    <span className="code-bracket">:</span>
                    <span className="text-foreground"> [</span>
                    <span className="code-string">"Git"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Docker"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Microsoft Azure"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "Amazon Web Services"</span>
                    <span className="code-bracket">,</span>
                    <span className="code-string"> "GitHub Actions"</span>
                    <span className="text-foreground">]</span>
                  </div>
                </div>

                <div>
                  <span className="code-bracket">{`}`}</span>
                  <span className="code-bracket">;</span>
                </div>
              </div>
            </div>
          </IDEWindow>
        </div>

        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
            <span className="code-bracket">{"< "}</span>
            <span className="code-keyword">Education & Experience</span>
            <span className="code-bracket">{" />"}</span>
          </h3>
          <div className="w-12 sm:w-16 h-0.5 bg-accent-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <TerminalWindow title="bash">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">eza</span>
              <span className="terminal-flag"> --tree</span>
              <span className="terminal-argument"> education</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-muted">.</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">├──</span>
              <span className="terminal-directory"> University of Bristol</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   ├──</span>
              <span className="terminal-file"> MEng Computer Science |</span>
              <span className="terminal-muted"> Sep 2022 - Jul 2026</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   </span>
              <span className="terminal-success">
                Expected First Class Honours
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   ├──</span>
              <span className="terminal-keyword">Year 2 Modules</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file">
                {" "}
                Software Engineering Project
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Algorithms II</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file">
                {" "}
                Programming Languages & Computation
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Concurrent & Distributed Programming</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file">
                {" "}
                Data-Driven Computer Science
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Interaction & Society</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   └──</span>
              <span className="terminal-file">
                {" "}
                Security & Operating Systems
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   ├──</span>
              <span className="terminal-keyword">Year 3 Modules</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Machine Learning</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Computer Graphics</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Algorithms III</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> Types & Lambda Calculus</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   ├──</span>
              <span className="terminal-file"> High-Performance Computing</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   │   └──</span>
              <span className="terminal-file"> Team Project</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   └──</span>
              <span className="terminal-keyword">Year 4 Modules</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file"> Applied Deep Learning</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file"> Advanced Visual AI</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file">
                {" "}
                Systems & Software Security
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file">
                {" "}
                Internet Economics & Financial Technology
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file">
                {" "}
                Advanced Computer Architecture
              </span>
            </div>
            <div className="terminal-line">

              <span className="terminal-tree-branch">│       └──</span>
              <span className="terminal-file"> Final Dissertation Project</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">├──</span>
              <span className="terminal-directory">
                {" "}
                Barton Peveril Sixth Form College
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│   └──</span>
              <span className="terminal-file"> A-Levels |</span>
              <span className="terminal-muted"> Sep 2020 - Jul 2022</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file"> Biology (A)</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file"> Chemistry (B)</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       ├──</span>
              <span className="terminal-file"> Maths (A)</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">│       └──</span>
              <span className="terminal-file"> AS Further Maths (A)</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">└──</span>
              <span className="terminal-directory">
                {" "}
                Oasis Academy Mayfield
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">    └──</span>
              <span className="terminal-file"> GCSEs |</span>
              <span className="terminal-muted"> Sep 2015 - Jul 2020</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">        ├──</span>
              <span className="terminal-number"> 7</span>
              <span className="terminal-file"> × Grade 9</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">        ├──</span>
              <span className="terminal-number"> 1</span>
              <span className="terminal-file"> × Grade 8</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">        └──</span>
              <span className="terminal-number"> 1</span>
              <span className="terminal-file"> × Grade 7</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor" />
            </div>
          </TerminalWindow>

          <TerminalWindow title="bash">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">eza</span>
              <span className="terminal-flag"> --tree</span>
              <span className="terminal-argument"> experience</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-muted">.</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">├──</span>
              <span className="terminal-directory"> Junior Developer</span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">├──</span>
              <span className="terminal-directory">
                {" "}
                Graduate Teacher Level 2
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-tree-branch">└──</span>
              <span className="terminal-directory">
                {" "}
                Graduate Teacher Level 1
              </span>
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor" />
            </div>
          </TerminalWindow>
        </div>

        <div className="text-center mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
            <span className="code-bracket">{"< "}</span>
            <span className="code-keyword">Awards</span>
            <span className="code-bracket">{" />"}</span>
          </h3>
          <div className="w-12 sm:w-16 h-0.5 bg-accent-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {awards.map((award, index) => {
            const key = `${award.title.replace(
              /\s+/g,
              "_",
            )}_${award.date.replace(/\s+/g, "_")}`;
            return (
              <IDEWindow
                key={key}
                showDots={false}
                title={`award_${index + 1}.ts`}
                className="hover:border-accent transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="p-4 sm:p-5">
                  <div className="text-accent mb-2 sm:mb-3">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 tracking-tight leading-snug">
                    {award.title}
                  </h3>
                  {award.issuer && (
                    <p className="text-xs sm:text-sm text-text-muted mb-1">
                      {award.issuer}
                    </p>
                  )}
                  <p className="text-xs text-text-muted">{award.date}</p>
                </div>
              </IDEWindow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
