"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Twitter, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-slate-900 rounded-lg shadow-sm">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Sommaire
              </span>
            </div>
            <p className="text-slate-500 text-xs font-medium tracking-tight">
              AI-powered document intelligence.
            </p>
          </div>

          {/* Socials and Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              <span>&copy; {currentYear} Sommaire AI</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>Built with Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
