import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EmptySummaryState() {
  return (
    <div className="text-center py-12">
      <div className="flex flex-col items-center gap-4">
        <FileText className="w-16 h-16 text-gray-400" />
        <div></div>
        <h3 className="text-xl font-semibold text-gray-600">
          No Summaries Yet
        </h3>
        <p className="text-gray-500 max-w-md">
          Upload YOur first PDF to get started with your AI Powered Summary
        </p>
        <Link href="/upload">
          <Button
            className="mt-4 text-white
          bg-linear-to-r from-rose-500 to-rose-700
          hover:from-rose-600 to-rose-800  group hover: no-underline"
            variant="link"
          >
            Create your first summary
          </Button>
        </Link>
      </div>
    </div>
  );
}
