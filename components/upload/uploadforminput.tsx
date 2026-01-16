"use client";

import React, { forwardRef, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2, Upload, FileText, X } from "lucide-react";

interface UploadforminputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isloading: boolean;
}

const Uploadforminput = forwardRef<HTMLFormElement, UploadforminputProps>(
  ({ onSubmit, isloading }, ref) => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (f: File | null) => {
      setFile(f);
    };

    return (
      <form ref={ref} onSubmit={onSubmit} className="flex flex-col gap-8">
        {/* Dropzone */}
        <label
          className={cn(
            "relative block w-full rounded-3xl border-2 border-dashed p-10 text-center cursor-pointer transition-all",
            isDragging
              ? "border-rose-500 bg-rose-50/50"
              : "border-slate-200 bg-white hover:border-rose-300 hover:bg-rose-50/20",
            isloading && "opacity-50 cursor-not-allowed"
          )}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile?.type === "application/pdf") {
              handleFileChange(droppedFile);
            }
          }}
        >
          <input
            type="file"
            name="file"
            accept="application/pdf"
            required
            disabled={isloading}
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
          />

          {!file ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center">
                <Upload className="w-7 h-7" />
              </div>
              <p className="font-bold text-slate-900">
                Click to upload or drag & drop
              </p>
              <p className="text-sm text-slate-500">
                PDF files only (max 25MB)
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold">
                <FileText className="w-4 h-4" />
                <span className="truncate max-w-[180px]">{file.name}</span>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="p-1 hover:bg-white/20 rounded-full"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">
                File selected
              </p>
            </div>
          )}
        </label>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button disabled={isloading || !file}>
            {isloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Upload Your PDF"
            )}
          </Button>
        </div>
      </form>
    );
  }
);

Uploadforminput.displayName = "Uploadforminput";
export default Uploadforminput;
