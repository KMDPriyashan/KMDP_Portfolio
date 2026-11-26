"use client";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaDatabase,
  FaDesktop,
  FaBrain,
  FaSearchPlus,
  FaCodeBranch,
} from "react-icons/fa";

const pillars = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Web & Mobile Development",
    desc: "Building clean, responsive web applications and cross-platform mobile apps with practical user flows, smooth UI, and reliable backend integration.",
    color: "brand",
  },
  {
    icon: FaDatabase,
    title: "Backend APIs & Database Design",
    desc: "Designing structured relational database schemas (ER diagrams) and building maintainable backend services and REST APIs with clean data handling.",
    color: "purple",
  },
  {
    icon: FaDesktop,
    title: "Desktop & Management Systems",
    desc: "Developing practical desktop applications and management systems with structured workflows, CRUD operations, and reliable data persistence.",
    color: "green",
  },
  {
    icon: FaBrain,
    title: "Applied AI & Computer Vision",
    desc: "Exploring practical AI and computer vision solutions—such as image recognition, detection workflows, and AI-assisted features—for real-world problem solving.",
    color: "cyan",
  },
  {
    icon: FaSearchPlus,
    title: "UI Clarity & Product Review",
    desc: "Evaluating websites and digital products from a user's perspective to spot usability gaps, layout issues, and actionable improvements.",
    color: "amber",
  },
  {
    icon: FaCodeBranch,
    title: "Problem Solving & Clean Code",
    desc: "Breaking down requirements step by step, writing readable and modular code, and continuously refining features through hands-on iteration.",
    color: "rose",
  },
];

const colorMap = {
  brand: {
    bg: "bg-brand-500/10",
    border: "border-brand-500/30",
    text: "text-brand-400",
    hover: "hover:border-brand-500/50",
  },
  purple: {
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/30",
    text: "text-accent-purple",
    hover: "hover:border-accent-purple/50",
  },
  green: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    hover: "hover:border-emerald-500/50",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    hover: "hover:border-cyan-500/50",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    hover: "hover:border-amber-500/50",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    text: "text-rose-400",
    hover: "hover:border-rose-500/50",
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-400 font-mono text-xs tracking-widest uppercase font-semibold"
        >
          About Me
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2"
        >
          Driven by Engineering Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mt-4 text-sm sm:text-base"
        >
          I bridge the gap between structured software design and practical,
          user-centric digital products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((p, i) => {
          const c = colorMap[p.color as keyof typeof colorMap];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 ${c.hover} transition-all duration-300 hover:-translate-y-2 group`}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} text-xl sm:text-2xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform`}
              >
                <p.icon />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}