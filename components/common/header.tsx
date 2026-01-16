"use client";
import NavLink from "./nav-link";
import { ArrowRight, FileText } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MotionButton, MotionDiv } from "./motion-wrapper";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
    >
      <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
        <div className="flex lg:flex-1">
          <NavLink
            className="flex items-center gap-1 lg:gap-2 shrink-0"
            href="/"
          >
            <FileText
              className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition
              duration-200 ease-in-out"
            />
            <span className="font-extrabold lg:text-xl text-gray-900">
              Sommaire
            </span>
          </NavLink>
        </div>
        {/* Pricing section */}
        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
          <SignedIn>
            <NavLink href="/dashboard">Your summaries</NavLink>
          </SignedIn>
          <SignedOut>
            <NavLink href="/#pricing">Features</NavLink>
          </SignedOut>
        </div>

        {/* Sign-In part */}
        <div className="flex lg:justify-end lg:flex-1">
          <SignedIn>
            <div className="flex gap-2 items-center">
              <NavLink href="/upload">Upload a PDF</NavLink>
              <div>Pro</div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="flex gap-2 items-center">
              <MotionButton
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-2.5 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#1A1A24] via-[#2A1F30] to-[#F43F5E] rounded-full shadow-sm hover:shadow-rose-500/20 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <span className="relative z-10">
                  <Link href="/sign-in">Sign In</Link>
                </span>
                <MotionDiv
                  className="relative z-10"
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </MotionDiv>
              </MotionButton>
            </div>
          </SignedOut>
        </div>
      </nav>
    </motion.header>
  );
}
