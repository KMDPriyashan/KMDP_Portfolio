"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare, FaChevronRight } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "All Works" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ai", label: "AI & Cloud" },
] as const;

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

export default function Projects({ onOpenModal }: ProjectsProps) {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <span className="text-brand-400 font-mono text-xs tracking-widest uppercase font-semibold">
            Portfolio Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Featured Projects
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                "px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-semibold transition-all",
                active === f.key
                  ? "bg-brand-500 text-white shadow-md"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col group",
                project.borderColor
              )}
            >
              {/* Preview */}
              <div className="relative h-40 sm:h-48 bg-slate-900 overflow-hidden flex items-center justify-center p-4 sm:p-6 border-b border-slate-800">
                <div
                  className={cn(
                    "w-full h-full rounded-xl bg-gradient-to-tr p-3 sm:p-4 flex flex-col justify-between border border-slate-700/50 shadow-inner group-hover:scale-105 transition-transform",
                    project.gradient
                  )}
                >
                  <div
                    className={cn(
                      "flex justify-between items-center text-[10px] sm:text-xs font-mono",
                      project.accentColor
                    )}
                  >
                    <span className="truncate">{project.slug}</span>
                    <span className="text-emerald-400 whitespace-nowrap ml-2">
                      ● Live
                    </span>
                  </div>
                  <div className="text-center font-bold text-white text-sm sm:text-lg font-mono tracking-wide">
                    {project.previewTitle}
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-400 font-mono">
                    <span>{project.previewStats.left}</span>
                    <span>{project.previewStats.right}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-brand-500/10 text-brand-400 font-mono text-[10px] sm:text-[11px] font-semibold border border-brand-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3
                    className={cn(
                      "text-base sm:text-xl font-bold text-white transition-colors",
                      `group-hover:${project.accentColor}`
                    )}
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-5 sm:pt-6 flex items-center justify-between border-t border-slate-800/80 mt-4 gap-2">
                  <button
                    onClick={() => onOpenModal(project)}
                    className={cn(
                      "text-[11px] sm:text-xs font-semibold flex items-center gap-1 hover:opacity-80",
                      project.accentColor
                    )}
                  >
                    <span>Details</span>
                    <FaChevronRight className="text-[9px]" />
                  </button>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a
                      href="#"
                      className="hover:text-white text-sm sm:text-base transition"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="hover:text-brand-400 text-sm sm:text-base transition"
                      aria-label="Live"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}