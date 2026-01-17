import Link from "next/link";
import { Card } from "../ui/card";
import DeleteButton from "./deletebutton";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";
import { cn, formatFileName } from "@/lib/utils";
import { formatDistance, subDays } from "date-fns";
import { MotionDiv } from "../common/motion-wrapper";

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

export default function SummaryCard({ summary }: { summary: any }) {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      className="group relative bg-white border border-slate-100 rounded-[2rem] p-6 transition-all duration-300 hover:border-rose-200 shadow-sm"
    >
      {/* Delete */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <DeleteButton summary_id={summary._id.toString()} />
      </div>

      <Link href={`/summaries/${summary._id}`} className="block">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-rose-500 group-hover:text-white">
            <FileText className="w-6 h-6" />
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-slate-900 line-clamp-1 group-hover:text-rose-600 transition-colors">
              {summary.title}
            </h4>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
              <Clock className="w-3 h-3" />
              {new Date(summary.created_at).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Excerpt */}
        <div className="mb-6 h-20">
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
            {summary.summary_text}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3 h-3" />
            {summary.status}
          </div>

          <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors flex items-center gap-1">
            View Summary <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none" />
    </MotionDiv>
  );
}
