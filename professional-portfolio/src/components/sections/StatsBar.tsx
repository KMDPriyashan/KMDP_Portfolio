"use client";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const stats = [
  { value: profile.stats.years, label: "Years Experience", color: "text-brand-400" },
  { value: profile.stats.projects, label: "Enterprise Projects", color: "text-emerald-400" },
  { value: profile.stats.requests, label: "API Requests Daily", color: "text-accent-purple" },
  { value: profile.stats.quality, label: "Code Quality & Delivery", color: "text-yellow-400" },
];

export default function StatsBar() {
  return (
    <section className="py-10 sm:py-12 border-y border-slate-800/80 bg-slate-900/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span
                className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold font-mono ${s.color}`}
              >
                {s.value}
              </span>
              <span className="text-[10px] sm:text-xs lg:text-sm text-slate-400 font-medium mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}