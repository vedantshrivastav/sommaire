import Link from "next/link";
import { Card } from "../ui/card";
import DeleteButton from "./deletebutton";
import { FileText } from "lucide-react";
import { cn, formatFileName } from "@/lib/utils";
import { formatDistance, subDays } from "date-fns";

const SummaryHeader = ({
  fileURL,
  title,
  created_at,
}: {
  fileURL: string;
  title: string | null;
  created_at: string;
}) => {
  return (
    <div className="flex items-start gap-2 sm:gap-4">
      <FileText
        className="w-6 h-6 sm:w-8 sm:h-8 text-rose-800
      mt-1"
      />
      <div className="flex-1 min-w-0">
        <h3
          className="text-base xl:text-lg font-semibold 
            text-gray-900 truncate w-4/5"
        >
          {title || formatFileName(fileURL)}
        </h3>
        <p className="text-sm text-gray-500">
          {formatDistance(new Date(created_at), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-full capitalize",
        status === "complete"
          ? "bg-green-100 text-green-800"
          : "bg-yellow-800 text-yellow-800"
      )}
    >
      {status}
    </span>
  );
};

export default function Summarycard({ summary }: { summary: any }) {
  return (
    <div>
      <Card className="relative h-full">
        <div className="absolute top-2 right-2">
          <DeleteButton summary_id={summary._id.toString()} />
        </div>
        <Link className="block p-4 sm:p-6" href={`summaries/${summary._id}`}>
          <div className="flex flex-col gap-3 sm:gap-4">
            <SummaryHeader
              fileURL={summary.original_file_url}
              title={summary.title}
              created_at={summary.created_at}
            />
            <p className="text-gray-600 line-clamp-2 text-sm sm:text-base pl-2">
              {summary.summary_text}
            </p>
            <div className="flex justify-between items-center mt-2 sm:mt-4">
              <span>
                <StatusBadge status={summary.status} />
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
}
