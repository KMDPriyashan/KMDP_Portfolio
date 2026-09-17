"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaFileDownload, FaTerminal } from "react-icons/fa";
import { profile } from "@/data/profile";

interface HeroProps {
  onTerminalOpen: () => void;
  onToast: (msg: string) => void;
}

export default function Hero({ onTerminalOpen, onToast }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-44 pb-16 sm:pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-[10px] sm:text-xs font-semibold tracking-wide shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="truncate">{profile.status}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
          >
            Architecting High-Scale <br className="hidden sm:block" />
            <span className="gradient-text">
              Cloud & Full-Stack Systems
            </span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed"
          >
            Hi, I'm{" "}
            <strong className="text-white font-semibold">{profile.name}</strong>
            . {profile.intro}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-brand-500 via-blue-600 to-accent-purple text-white font-semibold text-xs sm:text-sm shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              Explore Featured Work
              <FaArrowRight className="text-[10px]" />
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-card hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
            >
              <FaFileDownload className="text-brand-400" />
              Download CV
            </a>

            <button
              onClick={onTerminalOpen}
              className="px-4 py-3 sm:py-3.5 rounded-xl glass-card hover:bg-slate-800 text-emerald-400 font-mono text-xs sm:text-sm border border-slate-700 hover:border-emerald-500 transition-all flex items-center gap-2"
            >
              <FaTerminal />
              <span className="hidden sm:inline">Run Terminal</span>
            </button>
          </motion.div>

          {/* Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-slate-400 text-[10px] sm:text-xs font-mono pt-4 border-t border-slate-800/80 w-full"
          >
            <span className="text-slate-500 uppercase tracking-wider font-semibold whitespace-nowrap">
              Core Stack:
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-slate-300">
              {["TypeScript", "React/Next.js", "Node.js", "Go/Python", "AWS/Docker"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-2 sm:px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Right - Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-purple rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />

          <div className="relative glass-card rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-700/60 overflow-hidden">
            {/* Mac Header */}
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-slate-400 truncate">
                EngineerProfile.ts
              </span>
              <div className="text-[10px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                ONLINE
              </div>
            </div>

            {/* Code */}
            <pre className="font-mono text-[10px] sm:text-xs text-slate-300 py-3 sm:py-4 overflow-x-auto leading-relaxed">
              <code>
                <span className="text-accent-purple">interface</span>{" "}
                <span className="text-yellow-400">Engineer</span> {"{"}
                {"\n"} name:{" "}
                <span className="text-emerald-400">'Kasun Perera'</span>;
                {"\n"} role:{" "}
                <span className="text-emerald-400">
                  'Senior Full-Stack Architect'
                </span>
                ;{"\n"} experienceYears:{" "}
                <span className="text-orange-400">6+</span>;{"\n"} currentFocus:{" "}
                <span className="text-emerald-400">'Cloud Native'</span>;{"\n"}
                {"}"}
              </code>
            </pre>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 border-t border-slate-800">
              <div className="bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-400">
                  45+
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  Projects Shipped
                </div>
              </div>
              <div className="bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  99.8%
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}