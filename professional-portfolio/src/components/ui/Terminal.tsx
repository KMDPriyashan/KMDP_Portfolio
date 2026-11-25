"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Line = { text: string; className: string };

const QUICK_COMMANDS = [
  "about",
  "skills",
  "projects",
  "exp",
  "education",
  "services",
  "hire",
  "contact",
];

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
  - about      : Quick summary of Dulash Priyashan
  - skills     : View core tech stack & engineering strengths
  - projects   : Explore featured full-stack, mobile & AI builds
  - exp        : Display work & freelance experience
  - education  : Academic background & final-year research focus
  - services   : Freelance & product usability review offerings
  - hire       : Check current job & collaboration availability
  - contact    : Output direct email, location & social links
  - clear      : Wipe terminal output screen`,
        className: "text-slate-300",
      },
    ],
    about: () => [
      {
        text: `[ABOUT DULASH PRIYASHAN]
• Role     : Associate Software Engineer (Full-Stack & Mobile)
• Location : Gampaha / Colombo, Sri Lanka
• Mindset  : Strong focus on ER modeling, clean database schemas,
             modular backend APIs, and intuitive user interfaces.`,
        className: "text-slate-300",
      },
    ],
    skills: () => [
      {
        text: `[TECHNICAL STACK]
• Backend  : Java, Spring Boot, Node.js, Express, RESTful APIs
• Frontend : React, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS
• Mobile   : React Native, Expo
• Desktop  : JavaFX, FXML
• Database : MySQL, PostgreSQL, Supabase (ER Modeling & SQL)
• AI / CV  : YOLO, Gemini API, Computer Vision Workflows`,
        className: "text-slate-300",
      },
    ],
    projects: () => [
      {
        text: `[FEATURED PROJECTS]
1. CraftBurger POS & Restaurant System
   -> Desktop management app with full menu CRUD (JavaFX, FXML, MySQL)
2. fitFooD — Smart Food Scanner App
   -> Mobile nutrition & food scanner app (React Native, Expo, Supabase, Gemini API)
3. Loan & Customer Management Backend
   -> Clean REST API & generic CRUD architecture (Java, Spring Boot, Lombok, MySQL)
4. Health IT & Computer Vision Research
   -> Applied AI solutions for clinical support & visual detection`,
        className: "text-slate-300",
      },
    ],
    exp: () => [
      {
        text: `[EXPERIENCE OVERVIEW]
1. Research & System Development Engineer
   @ Hector Kobbekaduwa Agrarian Research and Training Institute (2024)
   -> Built data collection, reporting modules & relational DB schemas.
2. Freelance Website & Product Reviewer
   @ Fiverr (Remote)
   -> Audited websites for UI/UX clarity, user flow & actionable improvements.`,
        className: "text-slate-300",
      },
    ],
    education: () => [
      {
        text: `[ACADEMIC & RESEARCH]
• Degree   : BSc in Software Engineering (Final Year Undergraduate)
• Research : Health IT & Applied Artificial Intelligence
• Focus    : Algorithms, Data Structures, Design Patterns & System Design`,
        className: "text-slate-300",
      },
    ],
    services: () => [
      {
        text: `[WHAT I CAN HELP WITH]
• Full-Stack Web & Cross-Platform Mobile App Development
• REST API & Relational Database Schema (ER) Design
• JavaFX Desktop Management Systems
• Website & Product UI/UX Usability Audits (Structured Review Reports)`,
        className: "text-slate-300",
      },
    ],
    contact: () => [
      {
        text: `[CONTACT DETAILS]
• Name     : K.M. Dulash Priyashan
• Email    : dulash.priyashan@example.com  <-- (ඔයාගේ ඇත්ත email එක මෙතනට දාන්න)
• Location : Sri Lanka
• GitHub   : https://github.com/KMDPriyashan  <-- (ඔයාගේ ඇත්ත link එක දාන්න)
• LinkedIn : https://linkedin.com/in/dulash-priyashan`,
        className: "text-slate-300",
      },
    ],
    hire: () => [
      {
        text: `STATUS: Open to Associate Software Engineer, Full-Stack Developer roles, and freelance collaborations!`,
        className: "text-emerald-400 font-bold",
      },
    ],
    clear: () => {
      setLines([]);
      return [];
    },
  };

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const echo: Line = {
      text: `dulash@portfolio-cli:~$ ${cmd}`,
      className: "text-brand-400 font-bold",
    };

    if (commands[cmd]) {
      const output = commands[cmd]();
      if (cmd !== "clear") {
        setLines((prev) => [...prev, echo, ...output]);
      }
    } else {
      setLines((prev) => [
        ...prev,
        echo,
        {
          text: `Command not recognized: '${cmd}'. Type 'help' or click a command below.`,
          className: "text-red-400",
        },
      ]);
    }
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
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
            className="glass-card w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col h-[82vh] sm:h-[540px]"
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
                  dulash@portfolio-cli: ~
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
                Welcome to Dulash&apos;s Interactive Portfolio CLI v1.0!
              </p>
              <p className="text-slate-400">
                Type{" "}
                <span className="text-brand-400 font-bold">&apos;help&apos;</span>{" "}
                or click a quick command below to explore my profile.
              </p>
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap my-1.5 ${line.className}`}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Quick Command Chips */}
            <div className="bg-slate-900/60 px-3 sm:px-4 py-2 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto">
              <span className="text-[10px] font-mono text-slate-500 shrink-0 mr-1">
                Quick:
              </span>
              {QUICK_COMMANDS.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => executeCommand(cmd)}
                  className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hover:border-brand-400 hover:text-brand-400 transition-colors shrink-0"
                >
                  {cmd}
                </button>
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
                placeholder="Type a command (help, about, skills, projects...)"
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