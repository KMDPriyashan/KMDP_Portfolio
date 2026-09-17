"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaLaptop } from "react-icons/fa";
import { experiences } from "@/data/experience";

const iconMap = {
  briefcase: FaBriefcase,
  code: FaCode,
  laptop: FaLaptop,
};

const colorMap = {
  brand: {
    border: "border-brand-500",
    text: "text-brand-400",
    bg: "bg-brand-500/10",
    badgeBorder: "border-brand-500/30",
    cardHover: "hover:border-brand-500/40",
  },
  purple: {
    border: "border-accent-purple",
    text: "text-accent-purple",
    bg: "bg-accent-purple/10",
    badgeBorder: "border-accent-purple/30",
    cardHover: "hover:border-accent-purple/40",
  },
  green: {
    border: "border-emerald-500",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/30",
    cardHover: "hover:border-emerald-500/40",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80"
    >
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-brand-400 font-mono text-xs tracking-widest uppercase font-semibold">
          Career Milestones
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
          Work Experience
        </h2>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 md:ml-32 space-y-10 sm:space-y-12">
        {experiences.map((exp, i) => {
          const Icon = iconMap[exp.icon as keyof typeof iconMap];
          const c = colorMap[exp.color];
          return (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 ${c.border} flex items-center justify-center ${c.text} text-xs shadow-lg group-hover:scale-125 transition-transform`}
              >
                <Icon />
              </div>

              <div
                className={`glass-card rounded-2xl p-5 sm:p-6 lg:p-8 ${c.cardHover} transition-all`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-4">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className={`${c.text} font-medium text-xs sm:text-sm`}>
                      {exp.company} • {exp.location}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full ${c.bg} ${c.text} font-mono text-[10px] sm:text-xs border ${c.badgeBorder} self-start sm:self-auto whitespace-nowrap`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul className="text-slate-300 text-xs sm:text-sm space-y-2 list-disc list-inside leading-relaxed">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}