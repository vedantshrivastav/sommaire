"use client";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import Uploadforminput from "./uploadforminput";
import z from "zod";
import { error } from "console";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-action";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size should be less than 24mb",
    })
    .refine((file) => file.type.startsWith("application/pdf"), {
      message: "File must be a PDF",
    }),
});

export default function Uploadform() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isloading, setIsLoading] = useState(false);
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading", err);
      toast.error("Something went wrong", {
        description: err.message,
      });
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log("form submitted");
      const formdata = new FormData(e.currentTarget);
      const file = formdata.get("file") as File;

      //validating the fields
      const validatedFields = schema.safeParse({ file });
      console.log(validatedFields);
      if (!validatedFields.success) {
        // Strongly type the error tree
        const errorTree = z.treeifyError(validatedFields.error) as {
          file?: {
            _errors: string[];
          };
        };

        const fileError = errorTree.file?._errors?.[0];
        console.log(fileError ?? "Invalid file");
        toast("Something went wrong", {
          description: errorTree.file?._errors?.[0],
        });
        setIsLoading(false);
        return;
      }

      toast("Uploading Pdf", {
        description: "We are uploading your pdf",
      });

      // scchema with zod
      // upload the file to uploadthing
      const resp = await startUpload([file]);
      console.log("This is the resp", resp);
      if (!resp) {
        toast("Something went wrong", {
          description: "Please use a different file",
        });
        setIsLoading(false);
        return;
      }
      toast("Pdf Processing", {
        description: "Hang Tight! Our AI is going through your document",
      });
      // parse the pdf using lang chain
      console.log("Just before the summary");
      const summary = await generatePdfSummary(resp);
      console.log("Here is the summary", summary);
      const { data = null, message = null } = summary || {};
      // suammarize the pdf using AI
      // Done in another file
      // save the summary to the database
      if (data) {
        toast("Saving PDF", {
          description: "Hang Tight! We are saving your summary",
        });
      }
      formRef.current?.reset();
      // redirect to the summary page
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      formRef.current?.reset();
    }
  };
  return (
    <div
      className="flex flex-col gap-8 w-full max-w-2xl
    mx-auto"
    >
      <Uploadforminput
        isloading={isloading}
        ref={formRef}
        onSubmit={handlesubmit}
      />
    </div>
  );
}
