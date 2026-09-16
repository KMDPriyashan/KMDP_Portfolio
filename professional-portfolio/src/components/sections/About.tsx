"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaLaptopCode, FaRocket } from "react-icons/fa";

const pillars = [
  {
    icon: FaMicrochip,
    title: "System Architecture",
    desc: "Designing resilient, scalable cloud systems, REST/GraphQL APIs, microservices, and event-driven architectures using AWS and Kubernetes.",
    color: "brand",
  },
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    desc: "Crafting responsive, high-performance web frontends with React & Next.js alongside robust backend microservices in Node.js, TypeScript, and Go.",
    color: "purple",
  },
  {
    icon: FaRocket,
    title: "DevOps & CI/CD Pipeline",
    desc: "Automating build, test, and release pipelines with Docker, GitHub Actions, Terraform, and continuous integration workflows for instant deployment.",
    color: "green",
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
          I bridge the gap between complex software architecture and
          user-centric web products.
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
              transition={{ delay: i * 0.15 }}
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