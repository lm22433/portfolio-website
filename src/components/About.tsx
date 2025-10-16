"use client";

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

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

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Python",
    "GraphQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#363337]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with IDE styling */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffd866] mb-4 tracking-tight px-4">
            <span className="text-[#939293]">{'< '}</span>
            <span className="text-[#ff6188]">About Me</span>
            <span className="text-[#939293]">{' />'}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#ff6188] mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="ide-panel">
              <div className="ide-panel-header">
                <div className="ide-panel-dot red"></div>
                <div className="ide-panel-dot yellow"></div>
                <div className="ide-panel-dot green"></div>
                <span className="text-[#939293] text-xs sm:text-sm ml-2">bio.md</span>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#fcfcfa] leading-relaxed mb-6">
                  <span className="code-comment">{'/* '}</span>
                  <br />
                  <span className="code-comment ml-2 sm:ml-4">I'm a passionate full-stack developer with a love for creating</span>
                  <br />
                  <span className="code-comment ml-2 sm:ml-4">beautiful, functional, and user-friendly applications. With</span>
                  <br />
                  <span className="code-comment ml-2 sm:ml-4">several years of experience in web development, I specialize in</span>
                  <br />
                  <span className="code-comment ml-2 sm:ml-4">building modern web applications using cutting-edge technologies.</span>
                  <br />
                  <span className="code-comment">{' */'}</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#fcfcfa] leading-relaxed break-words">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">interests</span>{' '}
                  <span className="text-[#fcfcfa]">=</span>{' '}
                  <span className="code-bracket">{'['}</span>
                  <span className="code-string">'exploring new tech'</span>
                  <span className="text-[#fcfcfa]">, </span>
                  <span className="code-string">'open-source'</span>
                  <span className="text-[#fcfcfa]">, </span>
                  <span className="code-string">'community'</span>
                  <span className="code-bracket">{']'}</span>
                  <span className="text-[#fcfcfa]">;</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="ide-panel hover:border-[#ffd866] transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="ide-panel-header">
                <span className="text-[#939293] text-xs">{index + 1}</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-[#ffd866] mb-3 sm:mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#fcfcfa] mb-2 tracking-tight">
                  <span className="code-keyword text-xs sm:text-sm">{'class '}</span>
                  <span className="code-class">{skill.title}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#939293] leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#78dce8] text-center mb-6 sm:mb-8 px-4 break-words">
            <span className="code-keyword">const</span>{' '}
            <span className="code-variable">technologies</span>{' '}
            <span className="text-[#fcfcfa]">=</span>{' '}
            <span className="code-bracket">{'['}</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 bg-[#2d2a2e] border border-[#423f43] text-[#a9dc76] rounded-lg font-medium hover:border-[#a9dc76] hover:shadow-lg transition-all transform hover:scale-105 cursor-default text-xs sm:text-sm md:text-base"
              >
                <span className="code-string">'{tech}'</span>
                {index < technologies.length - 1 && <span className="text-[#fcfcfa]">,</span>}
              </span>
            ))}
          </div>
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-xl sm:text-2xl text-[#78dce8] code-bracket">{']'}</span>
            <span className="text-xl sm:text-2xl text-[#fcfcfa]">;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
