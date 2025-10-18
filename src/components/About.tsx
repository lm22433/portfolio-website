"use client";

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import IDEWindow from "./IDEWindow";

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Development",
      description:
        "Proficient in modern web technologies including React, Next.js, TypeScript, and Node.js",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description:
        "Creative approach to solving complex technical challenges with elegant solutions",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description:
        "Focused on building fast, scalable, and optimized applications for the best user experience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "Strong team player with excellent communication skills and agile methodology experience",
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
            <span className="code-bracket">{'< '}</span>
            <span className="code-keyword">About Me</span>
            <span className="code-bracket">{' />'}</span>
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
                    I'm a passionate full-stack developer creating beautiful, functional, and user-friendly applications. I focus on
                    performance, accessibility, and developer experience.
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-blue">##</span>
                  <span className="text-foreground"> Focus</span>
                </div>

                <div>
                  <span className="text-blue">-</span>
                  <span className="text-foreground"> Building modern web applications</span>
                </div>
                <div>
                  <span className="text-blue">-</span>
                  <span className="text-foreground"> Performance, scalability, and great UX</span>
                </div>
                <div>
                  <span className="text-blue">-</span>
                  <span className="text-foreground"> Collaboration, mentorship, and clear communication</span>
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
                    <span className="code-comment">{'/* '}</span>
                    <span className="code-comment">
                      Proficient across a broad range of software tools, frameworks, and programming languages
                    </span>
                    <span className="code-comment">{' */'}</span>
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
                      <span className="text-foreground"> [ </span>
                      <span className="code-string">""</span>
                      <span className="text-foreground"> ]</span>
                      <span className="code-bracket">,</span>
                    </div>
                    <div>
                      <span className="code-string">"Web Development"</span>
                      <span className="code-bracket">:</span>
                      <span className="text-foreground"> [ </span>
                      <span className="code-string">"HTML"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "CSS"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "JavaScript"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "TypeScript"</span>
                      <span className="text-foreground"> ]</span>
                      <span className="code-bracket">,</span>
                    </div>
                    <div>
                      <span className="code-string">"Frameworks"</span>
                      <span className="code-bracket">:</span>
                      <span className="text-foreground"> [ </span>
                      <span className="code-string">""</span>
                      <span className="text-foreground"> ]</span>
                      <span className="code-bracket">,</span>
                    </div>
                    <div>
                      <span className="code-string">"Databases"</span>
                      <span className="code-bracket">:</span>
                      <span className="text-foreground"> [ </span>
                      <span className="code-string">"PostgreSQL"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "MySQL"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "MongoDB"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "Redis"</span>
                      <span className="text-foreground"> ]</span>
                      <span className="code-bracket">,</span>
                    </div>
                    <div>
                      <span className="code-string">"DevOps & Containerisation"</span>
                      <span className="code-bracket">:</span>
                      <span className="text-foreground"> [ </span>
                      <span className="code-string">"Git"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "Docker"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "Microsoft Azure"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "Amazon Web Services"</span>
                      <span className="code-bracket">,</span>
                      <span className="code-string"> "GitHub Actions"</span>
                      <span className="text-foreground"> ]</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {skills.map((skill, index) => (
            <IDEWindow
              key={skill.title}
              showDots={false}
              title={`${index + 1}`}
              className="hover:border-accent transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="p-4 sm:p-5">
                <div className="text-accent mb-2 sm:mb-3">
                  {skill.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 tracking-tight">
                  <span className="code-keyword text-xs">{'class '}</span>
                  <span className="code-class">{skill.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </IDEWindow>
          ))}
        </div>
      </div>
    </section>
  );
}
