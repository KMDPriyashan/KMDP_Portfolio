"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";


const filters = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & DB" },
  { key: "cloud", label: "DevOps & Cloud" },
] as const;

export default function Skills() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? skills
      : skills.filter((s) => s.categories.includes(active as any));

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <span className="text-brand-400 font-mono text-xs tracking-widest uppercase font-semibold">
            Technical Proficiency
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
            Languages, Frameworks & Tools
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
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.03 }}
              className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center hover:border-brand-400 transition-all group"
            >
              <skill.icon
                className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                style={{ color: skill.color }}
              />
              <span className="font-bold text-xs sm:text-sm text-white text-center">
                {skill.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono mt-1">
                {skill.mastery}%
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}