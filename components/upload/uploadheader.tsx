"use client";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

export default function Uploadheader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div
        className="relative p-[1px] overflow-hidden
          rounded-full bg-linear-to-r from-rose-200 via bg-rose-500
          to-rose-800 animate-gradient-x group"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 border border-rose-100 rounded-full shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-rose-600">
            AI Powered Content Creation
          </span>
        </motion.div>
      </div>
      <div
        className="capitalize text-3xl font-bold tracking-tight
          text-gray-900 sm:text-4xl"
      >
        Start Uploading{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">Your PDF's</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
      </div>
      <div
        className="mt-2 text-lg leading-8 
          text-gray-600  max-w-2xl"
      >
        <p>Upload Your PDF and let AI do the magic</p>
      </div>
    </div>
  );
}
