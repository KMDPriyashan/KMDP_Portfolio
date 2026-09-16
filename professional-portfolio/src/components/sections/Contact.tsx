"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaPaperPlane,
  FaCopy,
} from "react-icons/fa6";
import { profile } from "@/data/profile";

interface ContactProps {
  onToast: (msg: string) => void;
}

export default function Contact({ onToast }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onToast(`Thank you ${form.name}! Your message was sent successfully.`);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
      onToast("Email address copied!");
    }
  };

  const socials = [
    { icon: FaGithub, href: profile.socials.github, color: "hover:text-white" },
    { icon: FaLinkedin, href: profile.socials.linkedin, color: "hover:text-brand-400" },
    { icon: FaXTwitter, href: profile.socials.twitter, color: "hover:text-cyan-400" },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <span className="text-brand-400 font-mono text-xs tracking-widest uppercase font-semibold">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
              Let's Build Something Great Together
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed">
              I am currently open to high-impact Senior Full-Stack / Lead
              Engineer positions, technical consulting, and architectural roles.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 my-6 sm:my-8">
            <button
              type="button"
              onClick={copyEmail}
              className="w-full glass-card p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4 hover:border-brand-500 transition-all cursor-pointer group text-left"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-mono">
                  Email Me
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                  {profile.email}
                </span>
              </div>
              <FaCopy className="text-slate-500 group-hover:text-brand-400 transition-colors flex-shrink-0" />
            </button>

            <div className="glass-card p-3 sm:p-4 rounded-xl flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                <FaLocationDot />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-mono">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {profile.availability}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-card flex items-center justify-center text-slate-300 ${s.color} hover:border-brand-500 transition-all text-lg sm:text-xl`}
              >
                <s.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6 border border-slate-700/80 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-[10px] sm:text-xs font-mono text-slate-300 mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3 sm:px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-mono text-slate-300 mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3 sm:px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-mono text-slate-300 mb-2">
                SUBJECT *
              </label>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Senior Engineer Role Opportunity"
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3 sm:px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-mono text-slate-300 mb-2">
                MESSAGE *
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Hi Kasun, we were impressed by your engineering background..."
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3 sm:px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-brand-500 via-blue-600 to-accent-purple text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-brand-500/20 hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              <span>Send Message to Kasun</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}