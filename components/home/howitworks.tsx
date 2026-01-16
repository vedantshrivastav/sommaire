"use client";
import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";
import { MotionDiv, MotionH2, MotionH3 } from "../common/motion-wrapper";
import React from "react";
import { motion, Variants } from "motion/react";

type Steps = {
  icon: ReactNode;
  label: string;
  description: string;
};
const steps: Steps[] = [
  {
    icon: <FileText size={40} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={40} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our Advanced AI processes and analyes your document instantly",
  },
  {
    icon: <FileOutput size={40} strokeWidth={1.5} />,
    label: "Get Summary",
    description: "Recieve a concise summary of your document in seconds",
  },
];
export default function Howitworks() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem]
    -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500
    opacity-20 sm:left-[calc(50%-30rem)] sm:w-[40.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0%, 80.8% 2.7%, 72.5% 21.5%, 60.2% 62.4%, 52.9% 68.1%, 47.5% 58.5%, 45.2% 34.5%, 27.5% 76.7%, 0% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 86%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="text-center  mb-16">
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="font-bold text-xs uppercase tracking-[0.25em] mb-4 text-rose-500"
          >
            How It Works
          </MotionH2>
          <MotionH3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-2xl max-w-2xl mx-auto"
          >
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </MotionH3>
        </div>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-4 relative"
        >
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 w-full max-w-sm lg:max-w-none relative group">
                <MotionDiv
                  variants={itemVariants}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.25, ease: "easeOut" }, // Decreased from 0.4 to 0.25 for snappier hover
                  }}
                  className="relative z-10 h-full flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white border border-gray-100 transition-all duration-300 group-hover:border-rose-200 group-hover:shadow-[0_30px_60px_-15px_rgba(244,63,94,0.12)] overflow-hidden"
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Box Animation */}
                  <MotionDiv className="relative flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    {step.icon}
                  </MotionDiv>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors duration-200">
                      {step.label}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Internal animated border box */}
                  <div className="absolute inset-2 border border-transparent group-hover:border-rose-500/5 rounded-[2rem] pointer-events-none transition-all duration-500 group-hover:inset-0" />
                </MotionDiv>
              </div>

              {/* Connecting Arrows - Custom Animated SVG */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-20 shrink-0">
                  <FlowArrow className="w-full h-auto" />
                </div>
              )}

              {/* Mobile Arrows */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-2 rotate-90">
                  <FlowArrow className="w-16 h-auto" />
                </div>
              )}
            </React.Fragment>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

const FlowArrow = ({ className }: { className?: string }) => (
  <svg
    width="60"
    height="24"
    viewBox="0 0 60 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 12H58M58 12L48 4M58 12L48 20"
      stroke="url(#arrow-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-20"
    />
    <motion.path
      d="M2 12H58M58 12L48 4M58 12L48 20"
      stroke="url(#arrow-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, 1, 1],
        opacity: [0, 1, 0],
        pathOffset: [0, 0, 1],
      }}
      transition={{
        duration: 1.8, // Decreased from 3 to 1.8 for a faster flow effect
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
    />
    <defs>
      <linearGradient
        id="arrow-gradient"
        x1="2"
        y1="12"
        x2="58"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDA4AF" />
        <stop offset="1" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
  </svg>
);

function StepItem({ icon, label, description }: Steps) {
  return (
    <div
      className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10
  hover:border-rose-500/50 transition-colors group w-full"
    >
      <div className="flex flex-col gap-4 h-full">
        <div
          className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl 
         bg-linear-to-br from-rose-500/10 to-transparent group-hover:from-rose-500/20
         transition-colors"
        >
          <div className="text-rose-500">{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between">
          <h4 className="text-center font-bold text-xl">{label}</h4>
          <p className="text-center text-ray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
