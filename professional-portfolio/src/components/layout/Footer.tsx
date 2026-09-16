"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " LOCAL"
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950/80 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-mono">
          © {new Date().getFullYear()} Kasun Perera. Handcrafted with Next.js,
          Tailwind & TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-mono">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            System Status: 100% Operational
          </span>
          <span className="text-brand-400 font-bold">{clock}</span>
        </div>
      </div>
    </footer>
  );
}