"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 glass-card px-4 sm:px-5 py-3 rounded-2xl border border-brand-500 text-white font-semibold text-xs shadow-2xl flex items-center gap-3 max-w-[calc(100vw-2rem)]"
        >
          <FaCheckCircle className="text-emerald-400 text-base flex-shrink-0" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}