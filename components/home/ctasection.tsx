"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-white to-rose-50/30 border border-rose-100/50 px-8 py-20 md:py-28 overflow-hidden text-center shadow-[0_40px_100px_-20px_rgba(244,63,94,0.05)]">
          {/* Animated Background Gradients Adjusted for Light Theme */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/20 blur-[120px] -mr-64 -mt-64 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] -ml-64 -mb-64 rounded-full pointer-events-none" />

          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100"
            >
              <Sparkles className="w-3 h-3 text-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-600">
                Efficiency Redefined
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8"
            >
              Ready to save <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
                hours of time?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium"
            >
              Transform lengthy documents into clear and actionable insights
              with our Gemini-powered engine. Join the elite readers today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 px-10 py-4 text-white bg-gradient-to-r from-[#1A1A24] via-[#2A1F30] to-[#F43F5E] rounded-full font-bold text-lg shadow-2xl shadow-rose-500/20 transition-all duration-300 overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <span className="relative z-10">Get Started Now</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Micro-proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest"
            >
              No credit card required • Start summarising instantly
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
