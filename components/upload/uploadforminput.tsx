"use client";
import React, { forwardRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Uploadform from "./uploadform";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface UploadforminputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isloading: boolean;
}

const Uploadforminput = forwardRef<HTMLFormElement, UploadforminputProps>(
  ({ onSubmit, isloading }, ref) => {
    return (
      <form className="flex flex-col gap-6" onSubmit={onSubmit} ref={ref}>
        <div className="flex justify-end items-center gap-1.5">
          <Input
            id="file"
            type="file"
            name="file"
            accept="application/pdf"
            required
            className={cn(isloading && "opacity-50 cursor-not-allowed")}
            disabled={isloading}
          />
          <Button disabled={isloading}>
            {isloading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
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
