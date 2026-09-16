"use client";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card max-w-2xl w-full rounded-3xl p-5 sm:p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-slate-400 hover:text-white text-xl"
            >
              <HiX />
            </button>

            <span className="text-brand-400 font-mono text-xs uppercase tracking-wider">
              Project Architecture Blueprint
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              {project.longDescription}
            </p>

            <div className="mt-6">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/30 text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}