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
      py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl"
    >
      {/* Badge */}
      <MotionDiv
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="relative p-[1px] overflow-hidden rounded-full 
        bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800
        animate-gradient-x group mb-6"
      >
        <Badge
          variant="secondary"
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full
          group-hover:bg-gray-50 transition-colors duration-200 flex items-center"
        >
          <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
          <span className="text-base text-rose-600">Powered by AI</span>
        </Badge>
      </MotionDiv>

      {/* Headings */}
      <MotionH1
        variants={itemVariants}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3"
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
        className="text-base sm:text-lg lg:text-xl text-center mb-5 text-gray-600 px-4 lg:px-0"
      >
        Get a beautiful summary reel of a document in seconds.
      </MotionH2>

      {/* CTA Button */}
      <MotionDiv variants={itemVariants} whileHover={buttonHoverAnimation}>
        <Link href="/pricing">
          <Button
            variant="link"
            className="text-white text-sm sm:text-base lg:text-lg rounded-full
          px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 mt-4
          bg-gradient-to-r from-slate-900 to-rose-500
          hover:from-rose-500 hover:to-slate-900
          font-bold shadow-md transition-all duration-300 flex items-center gap-2 no-underline hover:no-underline"
          >
            <span className="text-xs sm:text-sm">Try Sommaire</span>
            <ArrowRight className="animate-pulse" />
          </Button>
        </Link>
      </MotionDiv>
    </MotionSection>
  );
}
