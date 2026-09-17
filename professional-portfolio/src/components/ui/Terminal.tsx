"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Line = { text: string; className: string };

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const commands: Record<string, () => Line[]> = {
    help: () => [
      {
        text: `Available commands:
  - skills    : List primary tech stack & masteries
  - exp       : Display job history overview
  - projects  : View top featured software builds
  - contact   : Output direct email and socials
  - hire      : Display availability statement
  - clear     : Wipe terminal output screen`,
        className: "text-slate-300",
      },
    ],
    skills: () => [
      {
        text: `[TECH STACK]
• Frontend : TypeScript, React, Next.js, Tailwind CSS
• Backend  : Node.js, Express, Go, Python, GraphQL, REST
• Cloud/DB : AWS (EKS, S3, RDS), Docker, Kubernetes, PostgreSQL, Redis`,
        className: "text-slate-300",
      },
    ],
    exp: () => [
      {
        text: `[EXPERIENCE SUMMARY]
1. Senior Lead Software Engineer @ TechCorp USA (2023 - Present)
2. Full-Stack Engineer @ Fintech Lanka (2021 - 2023)
3. Associate Engineer @ CloudLogic (2019 - 2021)`,
        className: "text-slate-300",
      },
    ],
    projects: () => [
      {
        text: `[FEATURED PROJECTS]
1. CloudPulse Analytics (Next.js + Go Microservices)
2. NexusAI Document Copilot (Python + OpenAI + Vector DB)
3. PayFlow Gateway (Node.js + PostgreSQL + Stripe)`,
        className: "text-slate-300",
      },
    ],
    contact: () => [
      {
        text: `Email: kasun.perera.dev@example.com
Location: Colombo, Sri Lanka
LinkedIn: https://linkedin.com/in/kasun-perera`,
        className: "text-slate-300",
      },
    ],
    hire: () => [
      {
        text: `STATUS: Available for Senior / Staff Software Engineering roles. Let's schedule a call!`,
        className: "text-emerald-400 font-bold",
      },
    ],
    clear: () => {
      setLines([]);
      return [];
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const echo: Line = {
      text: `kasun@portfolio-cli:~$ ${cmd}`,
      className: "text-brand-400 font-bold",
    };

    if (commands[cmd]) {
      const output = commands[cmd]();
      setLines((prev) => [...prev, echo, ...output]);
    } else {
      setLines((prev) => [
        ...prev,
        echo,
        {
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
          className: "text-red-400",
        },
      ]);
    }
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="glass-card w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col h-[80vh] sm:h-[500px]"
          >
            {/* Header */}
            <div className="bg-slate-900 px-3 sm:px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80"
                  aria-label="Close"
                />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-xs text-slate-400 truncate">
                  kasun@portfolio-cli: ~
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white text-sm"
              >
                <HiX />
              </button>
            </div>

            {/* Body */}
            <div
              ref={bodyRef}
              className="p-3 sm:p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-y-auto flex-1 space-y-1"
            >
              <p className="text-emerald-400">
                Welcome to Kasun's Interactive Resume CLI v2.4.0!
              </p>
              <p className="text-slate-400">
                Type{" "}
                <span className="text-brand-400 font-bold">'help'</span> to
                view available commands.
              </p>
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap my-1 ${line.className}`}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/90 px-3 sm:px-4 py-3 border-t border-slate-800 flex items-center gap-2"
            >
              <span className="text-brand-400 font-mono text-sm font-bold">
                &gt;
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command (help, skills, exp...)"
                className="bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-slate-100 flex-1 focus:ring-0 min-w-0"
                autoComplete="off"
              />
              <button
                type="submit"
                className="text-[10px] sm:text-xs bg-brand-500/20 text-brand-400 px-2 sm:px-3 py-1 rounded border border-brand-500/40 hover:bg-brand-500 hover:text-white transition-all font-mono whitespace-nowrap"
              >
                Run
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}