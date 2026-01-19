"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  MessageSquare,
  FileSearch,
  Download,
  Layers,
  Sparkles,
  ArrowRight,
  Cpu,
  Fingerprint,
} from "lucide-react";

// Spotlight component for the "mouse follow" glow effect
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(244, 63, 94, 0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 transition-all duration-500 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-500/5 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-16 lg:mb-24 mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-rose-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
              The Future of Reading
            </span>
            <div className="h-px w-8 bg-rose-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-[1.1] tracking-normal mb-8"
          >
            Powered by next-gen <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">
              Contextual Intelligence.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-500 leading-relaxed max-w-2xl"
          >
            Beyond summaries. Clear insights from complex documents
          </motion.p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
          {/* Main Intelligence Card */}
          <SpotlightCard className="md:col-span-8 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Gemini 3 Pro Core
              </h3>
              <p className="text-slate-500 text-lg max-w-md">
                Utilizing the latest multimodal models to process text, tables,
                and visual charts with human-like comprehension.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-rose-50 overflow-hidden"
                  >
                    <img
                      src={`https://picsum.photos/seed/tech${i}/80/80`}
                      alt="tech"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-400">
                Advanced Neural Architecture
              </span>
            </div>
          </SpotlightCard>

          {/* Speed Card */}
          <SpotlightCard
            className="md:col-span-4 md:row-span-1"
            spotlightColor="rgba(59, 130, 246, 0.1)"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-tighter">
                Sub-Second
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Lightning Fast
            </h3>
            <p className="text-slate-500 text-sm">
              Summarize 500 pages in the blink of an eye.
            </p>
          </SpotlightCard>

          {/* Security Card */}
          <SpotlightCard
            className="md:col-span-4 md:row-span-1"
            spotlightColor="rgba(16, 185, 129, 0.1)"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                <Fingerprint className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Vault Privacy
            </h3>
            <p className="text-slate-500 text-sm">
              Zero-knowledge encryption for all sensitive files.
            </p>
          </SpotlightCard>

          {/* Interaction Card */}
          <SpotlightCard className="md:col-span-5 md:row-span-2 bg-gradient-to-br from-white to-rose-50/30">
            <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-rose-200">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Document Dialogue
            </h3>
            <p className="text-slate-500 mb-8">
              Don't just read the summary—chat with it. Ask "What was the EBITDA
              in Q3?" or "Explain the legal risk in section 4."
            </p>
            <div className="mt-auto p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-100 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-medium text-slate-600 italic">
                AI is typing...
              </span>
            </div>
          </SpotlightCard>

          {/* Formats Card */}
          <SpotlightCard className="md:col-span-7 md:row-span-1">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Universal Compatibility
                </h3>
                <p className="text-slate-500 text-sm">
                  PDF, DOCX, TXT, and even hand-written scans via OCR.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Export Card */}
          <SpotlightCard className="md:col-span-4 md:row-span-1">
            <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 mb-4">
              <Download className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Clean Exports
            </h3>
            <p className="text-slate-500 text-sm">
              Beautifully formatted Markdown or PDF summaries.
            </p>
          </SpotlightCard>

          {/* Search Card */}
          <SpotlightCard className="md:col-span-3 md:row-span-1">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-4">
              <FileSearch className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Deep Index
            </h3>
            <p className="text-slate-500 text-sm">Find needles in haystacks.</p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
