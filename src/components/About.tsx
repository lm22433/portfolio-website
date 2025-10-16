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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#181818] dark:text-white mb-4 tracking-tight">
            <span className="opacity-50">{'< '}</span>
            About Me
            <span className="opacity-50">{' />'}</span>
          </h2>
          <div className="w-20 h-1 bg-[#181818] dark:bg-white mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with a love for creating
              beautiful, functional, and user-friendly applications. With
              several years of experience in web development, I specialize in
              building modern web applications using cutting-edge technologies.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 bg-white dark:bg-[#222222] rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-[#181818] dark:text-white mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-[#181818] dark:text-white mb-2 tracking-tight">
                <span className="opacity-50 text-sm">{'{ '}</span>
                {skill.title}
                <span className="opacity-50 text-sm">{' }'}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#181818] dark:text-white text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-[#222222] text-[#181818] dark:text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
