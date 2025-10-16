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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-secondary mb-4 tracking-tight px-4">
            <span className="code-bracket">{'< '}</span>
            <span className="code-keyword">Projects</span>
            <span className="code-bracket">{' />'}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent-secondary mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto px-4">
            <span className="code-comment">{'// '}</span>
            <span className="text-foreground">Here are some of my recent projects that showcase my skills and
            passion for development</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="ide-panel hover:border-purple transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* IDE-like header */}
              <div className="ide-panel-header">
                <div className="ide-panel-dot red"></div>
                <div className="ide-panel-dot yellow"></div>
                <div className="ide-panel-dot green"></div>
                <span className="text-text-muted text-xs ml-2 truncate">project_{index + 1}.tsx</span>
              </div>

              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-background-lighter">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 opacity-90"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-accent mb-3 break-words">
                  <span className="code-keyword text-xs sm:text-sm">function </span>
                  {project.title}
                  <span className="code-bracket">{'() {'}</span>
                </h3>
                <p className="text-sm sm:text-base text-text-muted mb-4 flex-1">
                  <span className="code-comment">{'// '}</span>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-background border border-border text-blue rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-green text-green rounded hover:bg-green hover:text-background transition-all font-medium text-sm sm:text-base"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-purple text-background rounded hover:opacity-90 transition-all font-medium text-sm sm:text-base"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Demo
                  </a>
                </div>
                <div className="mt-3 sm:mt-4 text-foreground">
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
