"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaTerminal, FaArrowRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Tech Stack", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Contact", href: "#contact", id: "contact" },
];

interface NavbarProps {
  onTerminalOpen: () => void;
}

export default function Navbar({ onTerminalOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 transition-all duration-300",
        scrolled ? "py-2" : "py-3 sm:py-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between glass-card rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 shadow-2xl transition-all",
          scrolled && "bg-slate-950/85"
        )}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-purple flex items-center justify-center text-white font-mono font-bold text-sm sm:text-lg shadow-lg group-hover:scale-105 transition-transform">
            &lt;K/&gt;
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white text-sm sm:text-base group-hover:text-brand-400 transition-colors">
              Kasun Perera
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-mono hidden xs:block">
              Senior Full-Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "transition-colors relative",
                activeId === link.id
                  ? "text-brand-400"
                  : "hover:text-brand-400"
              )}
            >
              {link.name}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-400 rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onTerminalOpen}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[10px] sm:text-xs font-mono text-brand-400 border border-slate-700 transition-all hover:border-brand-500 shadow-inner"
          >
            <FaTerminal className="text-brand-400" />
            <span className="hidden sm:inline">CLI Mode</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-purple text-white text-xs font-semibold shadow-md hover:opacity-90 hover:shadow-brand-500/20 hover:scale-105 transition-all"
          >
            Hire Me
            <FaArrowRight className="text-[10px]" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white text-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-4 sm:p-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-3 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-brand-400 transition-colors border-b border-slate-800/50 last:border-0 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-purple text-white text-sm font-semibold text-center"
              >
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}