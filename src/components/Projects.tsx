"use client";

import { ExternalLink, GithubIcon } from "lucide-react";
import IDEWindow from "./IDEWindow";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Marine Conservation App",
      summary: "Marine Conservation App is a mobile and web platform designed to support marine conservation efforts by providing tools for data collection, analysis, and community engagement.",
      description: "",
      previewImage: {
        type: "image",
        src: "projects/marine-conservation-app.png",
      },
      media: [],
      tags: ["Flutter", "Dart", "Python", "Django", "PostgreSQL", "Docker", "AWS"],
      github: "https://github.com/lm22433/2023-MarineConservationApp",
      demo: ""
    },
    {
      title: "RedNoise",
      summary: "A CPU based ray tracer written in C++ supporting wireframe, rasterization and real-time ray tracing, featuring reflective and refractive materials, metallic surfaces, and environment mapping.",
      description: "",
      previewImage: {
        type: "image",
        src: "projects/red-noise.png",
      },
      media: [
        {
          type: "image",
          src: "projects/red-noise.png"
        },
        {
          type: "video",
          src: "projects/red-noise/render.mp4"
        }
      ],
      tags: ["C++", "Computer Graphics"],
      github: "https://github.com/lm22433"
    },
    {
      title: "Shifting Sands",
      summary: "Shifting Sands is an augmented reality game.",
      description: "",
      previewImage: {
        type: "image",
        src: "projects/shifting-sands/background_image.png",
      },
      media: [
        {
          type: "image",
          src: "projects/shifting-sands/background_image.png"
        },
        {
          type: "image",
          src: "projects/shifting-sands/group_photo.jpg"
        },
        {
          type: "video",
          src: "projects/shifting-sands/trailer.mp4"
        },
        {
          type: "video",
          src: "projects/shifting-sands/technical.mp4"
        },
        {
          type: "video",
          src: "projects/shifting-sands/gameplay.mp4"
        }
      ],
      tags: ["Unity", "C#"],
      github: "https://github.com/lm22433/2024-SealTeam7",
      demo: "https://sealteam7-4976a.web.app"
    },
    {
      title: "High-Performance Computing",
      summary: "",
      description: "",
      previewImage: {
        type: "image",
        src: "projects/high-performance-computing.png",
      },
      media: [],
      tags: ["C++", "MPI", "OpenMP", "CUDA", "Parallel Computing"],
      github: "https://github.com/lm22433/high-performance-computing"
    },
    {
      title: "Portfolio Website",
      summary: "The website you are currently viewing. My portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my projects and skills.",
      description: "",
      previewImage: {
        type: "image",
        src: "projects/portfolio-website/hero.png",
      },
      media: [
        {
          type: "image",
          src: "projects/portfolio-website/hero.png",
        }
      ],
      tags: ["Node.js", "React", "TypeScript", "Next.js", "Tailwind CSS", "Docker", "Biome"],
      github: "https://github.com/lm22433/portfolio-website",
      demo: "https://harrygreentree.co.uk"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-accent-secondary mb-3 tracking-tight px-4">
            <span className="code-bracket">{'< '}</span>
            <span className="code-keyword">Projects</span>
            <span className="code-bracket">{' />'}</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-accent-secondary mx-auto mb-3 sm:mb-4"></div>
          <p className="text-xs sm:text-sm md:text-base text-text-muted max-w-2xl mx-auto px-4">
            <span className="code-comment">{'// '}</span>
            <span className="text-foreground">Here are some of my recent projects that showcase my skills and passion for development</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group h-full"
            >
              <IDEWindow
                title={`project_${index + 1}.tsx`}
                className="hover:border-purple transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="flex flex-col h-full">
                  <button
                    type="button"
                    className="w-full text-left flex-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={(e) => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                      // Remove focus from the card to avoid visible focus outline behind the modal
                      (e.currentTarget as HTMLButtonElement).blur();
                    }}
                  >
                    {/* Project Preview */}
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-background-lighter">
                      <img
                        src={project.previewImage.src}
                        alt={project.previewImage.alt || project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-lighter opacity-60"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-accent mb-2 break-words">
                        <span className="code-keyword text-xs">function </span>
                        {project.title}
                        <span className="code-bracket">{'() {'}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted mb-3 flex-1">
                        <span className="code-comment">{'// '}</span>
                        {project.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-background border border-border text-blue rounded font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 text-foreground">
                        <span className="code-bracket">{'}'}</span>
                      </div>
                    </div>
                  </button>

                  {/* Links */}
                  <div className="px-4 sm:px-5 pb-5 pt-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-green text-green rounded hover:bg-green hover:text-background transition-all font-medium text-xs sm:text-sm"
                    >
                      <GithubIcon className="w-3 h-3" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-purple text-background rounded hover:opacity-90 transition-all font-medium text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </IDEWindow>
            </div>
          ))}
        </div>
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => {
            console.log("Closing modal dog");
            setIsModalOpen(false)
          }}
          project={selectedProject}
        />
      </div>
    </section>
  );
}
