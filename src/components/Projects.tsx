"use client";

import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment integration, and an admin dashboard. Built with Next.js, TypeScript, and Stripe.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for agile teams.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps marketers create engaging content. Integrates with OpenAI API and features a modern, intuitive interface.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Next.js", "OpenAI", "TailwindCSS", "Prisma"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard for tracking portfolio performance with beautiful data visualizations and real-time market data integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Platform",
      description:
        "A modern social networking platform with posts, likes, comments, and real-time notifications. Features include user authentication and profile customization.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with detailed forecasts, interactive maps, and location-based recommendations. Clean UI with smooth animations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Weather API", "Mapbox"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#181818] dark:text-white mb-4 tracking-tight">
            <span className="opacity-50">{'< '}</span>
            Projects
            <span className="opacity-50">{' />'}</span>
          </h2>
          <div className="w-20 h-1 bg-[#181818] dark:bg-white mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            <span className="opacity-50">{'// '}</span>
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#181818] dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-[#181818] text-[#181818] dark:text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-[#181818] dark:border-white text-[#181818] dark:text-white rounded-lg hover:bg-[#181818] hover:text-white dark:hover:bg-white dark:hover:text-[#181818] transition-all font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#181818] dark:bg-white text-white dark:text-[#181818] rounded-lg hover:opacity-90 transition-all font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
