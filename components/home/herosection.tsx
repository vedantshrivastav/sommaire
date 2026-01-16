import { Sparkles, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionSection,
  MotionSpan,
  MotionButton,
} from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

export default function Herosection() {
  const buttonHoverAnimation = {
    scale: 1.05,
    transition: {
      scale: {
        type: "spring" as "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex flex-col z-0 items-center justify-center
        py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl translate-y-20"
    >
      {/* Badge */}
      <MotionDiv
        variants={itemVariants}
        className="relative mb-10 group cursor-default"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-rose-600 to-rose-800 rounded-full opacity-10 blur group-hover:opacity-30 transition duration-500 animate-pulse"></div>
        <div className="relative flex items-center gap-2 px-5 py-1.5 bg-white rounded-full border border-rose-100 shadow-sm transition-all duration-300 group-hover:border-rose-200">
          <MotionDiv
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          </MotionDiv>
          <span className="text-xs font-semibold tracking-wide text-rose-600 uppercase">
            Powered by Gemini AI
          </span>
        </div>
      </MotionDiv>

      {/* Headings */}
      <MotionH1
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-3 tracking-tight"
      >
        Transform PDFs into{" "}
        <MotionSpan className="relative inline-block">
          <MotionSpan
            whileHover={buttonHoverAnimation}
            className="relative z-10 px-2"
          >
            concise
          </MotionSpan>
          <MotionSpan
            className="absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></MotionSpan>
        </MotionSpan>{" "}
        summaries
      </MotionH1>
      <MotionH2
        variants={itemVariants}
        className="text-xs sm:text-md lg:text-lg text-center mb-5 text-gray-600 px-4 lg:px-0 tracking-tight"
      >
        Get a beautiful summary reel of a document in seconds.
      </MotionH2>

      {/* CTA Button */}
      <MotionButton
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#1A1A24] via-[#2A1F30] to-[#F43F5E] text-white rounded-full font-semibold text-base shadow-lg shadow-rose-200/20 transition-shadow duration-300 group-hover:shadow-rose-500/30 overflow-hidden mt-5"
      >
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

        <span className="relative z-10">Try Sommaire</span>
        <MotionDiv
          className="relative z-10"
          variants={{
            initial: { x: 0 },
            hover: { x: 3 },
          }}
          initial="initial"
          whileHover="hover"
        >
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </MotionDiv>
      </MotionButton>

      {/* Build for students , prof */}
      <MotionDiv
        variants={itemVariants}
        className="mt-16 flex flex-col items-center gap-4 text-slate-400"
      >
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
          AI-powered document summaries
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <MotionDiv
              key={i}
              whileHover={{ y: -3, scale: 1.1, zIndex: 10 }}
              className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${i + 100}/80/80`}
                alt="user"
                className="w-full h-full object-cover"
              />
            </MotionDiv>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            +
          </div>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}
