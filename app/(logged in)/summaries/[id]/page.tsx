import BgGradient from "@/components/common/bgGradient";
import SourceInfo from "@/components/summaries/sourceInfo";
import SummaryViewer from "@/components/summaries/summary-viewer";
import SummaryHeader from "@/components/summaries/summaryheader";
import getSummaryById from "@/lib/summaries";
import { FileText } from "lucide-react";
import { notFound } from "next/navigation";

export default async function SummaryPage(props: { params: { id: string } }) {
  const { id } = props.params;
  const summary = await getSummaryById(id);
  const {
    title,
    summary_text,
    file_name,
    created_at,
    word_count,
    original_file_url,
  } = summary || {};
  const reading_time = Math.ceil((word_count || 0) / 200);
  if (!summary) {
    notFound();
  }
  return (
    <div
      className="relative isolate min-h-screen
  bg-linear-to-b from-rose-50/40 to-white"
    >
      <BgGradient className="from-rose-400 via-rose-300 to-orange-200" />
      <div className="container mx-auto flex flex-col gap-4">
        <div
          className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12
        lg:py-24"
        >
          <div className="flex flex-col">
            <SummaryHeader
              reading_time={reading_time}
              created_at={created_at!}
              title={title!}
              summary_text={summary_text!}
              filename={file_name!}
            />
          </div>
          {/* {file_name && <SourceInfo file_name={file_name} />} */}
          <div className="relative mt-4 sm:mt-8 lg:mt-16">
            {file_name && (
              <SourceInfo
                fileurl={original_file_url!}
                file_name={file_name}
                title={title!}
                summary_text={summary_text!}
                created_at={created_at!}
              />
            )}

            <div className="relative mt-4 sm:mt-8 lg:mt-16">
              <div className="relative z-0 mx-auto w-full max-w-6xl p-8 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border border-rose-100/30 transition-all duration-300 hover:shadow-2xl hover:ring-4 hover:ring-white/30">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-orange-50 to-transparent opacity-50 rounded-2xl sm:rounded-3xl" />

                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs">
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-rose-400" />
                  {word_count?.toLocaleString()} words
                </div>

                <div className="relative mt-8 sm:mt-6 flex justify-center">
                  <SummaryViewer summary={summary_text!} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
