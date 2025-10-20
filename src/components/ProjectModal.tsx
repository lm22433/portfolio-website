"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import IDEWindow from "./IDEWindow";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: Readonly<ProjectModalProps>) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const media = useMemo(() => project?.media ?? [], [project]);

  const renderMedia = (item: ProjectMedia, altFallback: string) => {
    if (!item) return null;
    if (item.type === "video") {
      return (
        <video
          className="w-full h-auto max-h-72 sm:max-h-96 bg-black"
          controls
          playsInline
        >
          <source src={item.src} />
          Your browser does not support the video tag.
        </video>
      );
    }
    // image or gif
    return (
      <img
        src={item.src}
        alt={item.alt || altFallback}
        className="w-full h-auto object-cover max-h-72 sm:max-h-96"
      />
    );
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (media.length > 0) {
        if (e.key === "ArrowRight") setIndex((i) => (i + 1) % media.length);
        if (e.key === "ArrowLeft")
          setIndex((i) => (i - 1 + media.length) % media.length);
      }
    };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => setVisible(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose, media.length]);

  // Reset media index when project changes or modal re-opens
  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        role="button"
        aria-label="Close modal"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
            e.preventDefault();
            onClose();
          }
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-2xl lg:max-w-4xl transition-all duration-200 ${
            visible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
        >
          <IDEWindow
            title={project.title}
            showDots
            className="max-h-[80vh] flex flex-col"
          >
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {/* Media carousel or fallback preview image */}
              {media.length > 0 ? (
                <div className="relative rounded-lg overflow-hidden border border-white/10">
                  {/* Slides */}
                  <div key={media[index]?.src} className="w-full h-auto">
                    {renderMedia(media[index], project.title)}
                  </div>

                  {/* Controls */}
                  {media.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2 border border-white/20"
                        onClick={() =>
                          setIndex((i) => (i - 1 + media.length) % media.length)
                        }
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2 border border-white/20"
                        onClick={() => setIndex((i) => (i + 1) % media.length)}
                      >
                        ›
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
                        {media.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 w-2 rounded-full border border-white/30 ${i === index ? "bg-white/90" : "bg-white/20"}`}
                            onClick={() => setIndex(i)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                project.previewImage && (
                  <div className="rounded-lg overflow-hidden border border-white/10">
                    {renderMedia(project.previewImage, project.title)}
                  </div>
                )
              )}

              {/* Project description */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Description
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 text-white/80 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm sm:text-base rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/20"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm sm:text-base rounded-md bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/20"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </IDEWindow>
        </div>
      </div>
    </div>,
    document.body,
  );
}
