"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-brand-400 font-mono text-xs tracking-widest uppercase font-semibold">
          Endorsements
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
          What Engineering Leaders Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative"
          >
            <FaQuoteLeft className="text-2xl sm:text-3xl text-brand-500/30 absolute top-5 sm:top-6 right-5 sm:right-6" />
            <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-800">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0`}
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-white text-xs sm:text-sm truncate">
                  {t.name}
                </h4>
                <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate block">
                  {t.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}