"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaFileDownload, FaTerminal } from "react-icons/fa";
import heroImage from "@/components/images/heroImage.png";
import { profile } from "@/data/profile";

interface HeroProps {
  onTerminalOpen: () => void;
}

const stack = [
  "Java",
  "JavaScript",
  "Spring Boot",
  "React",
  "Next.js",
  "MySQL",
  "AWS",
  "n8n",
  "Docker",
];

export default function Hero({ onTerminalOpen }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto max-w-7xl overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-18 sm:pt-16 lg:min-h-[760px] lg:px-8 lg:pb-10 lg:pt-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-24 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[130px]"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-4 lg:grid-cols-12 lg:gap-0">
        <div className="z-20 flex flex-col items-start gap-5 sm:gap-6 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/70 px-3 py-2 text-[10px] font-semibold tracking-wide text-slate-100 shadow-[0_0_24px_rgba(6,182,212,0.12)] sm:text-xs"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">{profile.status}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] xl:text-6xl"
          >
            <span className="block">Building Reliable</span>
            <span className="gradient-text block">
              Full-Stack Applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm mt-4 leading-relaxed text-slate-300 sm:text-base lg:text-lg"
          >
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-white">{profile.name}</strong>,
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex w-full flex-wrap items-center gap-x-5 gap-y-3 border-t border-cyan-900/70 pt-4 text-xs font-semibold text-slate-200 sm:gap-x-6 sm:pt-5"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 transition-colors hover:text-cyan-300"
            >
              Explore Featured Work
              <FaArrowRight className="text-cyan-300" />
            </a>
            <a
              href={profile.resumeUrl}
              download="K.M Dulash Priyashan - CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900/80 px-4 py-3 transition-colors hover:bg-slate-800"
            >
              <FaFileDownload className="text-cyan-300" />
              Download CV
            </a>
            <button
              onClick={onTerminalOpen}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/70 bg-slate-950/60 px-4 py-3 font-mono text-emerald-300 transition-colors hover:bg-emerald-500/10"
            >
              <FaTerminal />
              Run Terminal
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex w-full flex-col border-t border-slate-800/80 pt-4 text-[10px] font-mono sm:flex-row sm:items-center sm:gap-4 sm:text-xs"
          >
            <div className="flex flex-wrap gap-2 text-slate-200">
              {stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-blue-400/20 bg-blue-950/50 px-3 py-1.5 shadow-[inset_0_0_12px_rgba(59,130,246,0.08)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mx-auto mt-0 flex h-[440px] w-full max-w-[34rem] items-end justify-center sm:h-[560px] lg:col-span-5 lg:mt-0 lg:h-[650px] lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-[8%] left-1/2 aspect-square w-[82%] -translate-x-1/2 rounded-full border border-cyan-400/30 bg-[radial-gradient(circle,rgba(8,47,105,0.42)_0%,rgba(3,7,18,0)_70%)] shadow-[0_0_80px_rgba(14,165,233,0.2)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[12%] left-1/2 aspect-square w-[94%] -translate-x-1/2 rounded-full border border-blue-500/20"
          />

          <div
            aria-hidden="true"
            className="absolute left-[3%] top-[24%] z-10 rounded-xl border border-cyan-400/40 bg-slate-950/80 px-4 py-2.5 font-mono text-sm text-cyan-200 shadow-[0_0_24px_rgba(6,182,212,0.15)]"
          >
            Java
          </div>
          <div
            aria-hidden="true"
            className="absolute right-[3%] top-[20%] z-10 rounded-xl border border-cyan-400/40 bg-slate-950/80 px-4 py-2.5 text-lg font-bold text-cyan-300 shadow-[0_0_24px_rgba(6,182,212,0.15)]"
          >
            Spring Boot
          </div>
          <div
            aria-hidden="true"
            className="absolute right-0 top-[43%] z-10 rounded-xl border border-blue-400/40 bg-slate-950/85 px-4 py-2.5 font-mono text-sm font-bold text-white shadow-[0_0_24px_rgba(59,130,246,0.15)]"
          >
            Intelij
          </div>
          <div
            aria-hidden="true"
            className="absolute left-0 top-[49%] z-10 rounded-xl border border-fuchsia-400/40 bg-slate-950/85 px-4 py-2.5 font-mono text-sm font-bold text-fuchsia-300 shadow-[0_0_24px_rgba(217,70,239,0.15)]"
          >
            &lt;/&gt;
          </div>

          <Image
            src={heroImage}
            alt={`${profile.name}, software engineer`}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="z-[1] object-contain object-bottom drop-shadow-[0_0_32px_rgba(14,165,233,0.16)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-20 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}