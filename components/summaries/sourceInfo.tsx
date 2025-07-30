import { ExternalLink, FileText } from "lucide-react";
import { Button } from "../ui/button";

export default function SourceInfo({
  file_name,
  fileurl,
  title,
  summary_text,
  created_at,
}: {
  file_name: string;
  fileurl: string;
  title: string;
  summary_text: string;
  created_at: Date; // or `Date` depending on your data
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-2">
        <FileText className="h-4 w-4 text-rose-400" />
        <span>Source: {file_name}</span>
      </div>
      <div className="flex gap-2">
        <Button
          // import from "@/components/ui/button"
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-rose-600 hover:text-rose-700 hover:bg-rose-50"
          asChild
        >
          <a href={fileurl!} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-1" />
            View Original
          </a>
        </Button>
      </div>
    </div>
  );
}
