import BgGradient from "@/components/common/bgGradient";
import Summarycard from "@/components/summaries/summarycard";
import { Button } from "@/components/ui/button";
import user from "@/db/models/user";
import { getSummaries } from "@/lib/summaries";
import { useAuth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import EmptySummaryState from "@/components/summaries/emptysummarystate";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user?.id) {
    return redirect("/sign-in");
  }
  const user_id = user.id;
  const uploadLimit = 5;
  const summaries = await getSummaries(user_id);
  return (
    <main className="min-h-screen">
      <BgGradient className="from-emrald-200 via-teal-200 to-cyan-200" />
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-2 py-12 sm:py-24">
          <div className="flex gap-4 mb-8 justify-between">
            <div className="flex flex-col gap-2">
              <h1
                className="text-4xl font-bold tracking-tight bg-linear-to-r
              from-gray-600 to-gray-900 bg-clip-text text-transparent"
              >
                Your Summaries
              </h1>
              <p className="text-gray-600">
                Transform your pdf into concise,actionable insights
              </p>
            </div>
            <Button
              variant="link"
              className="bg-to-linear-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-700
            hover:scale-105 transition-all duration-300 group hover:no-underline"
            >
              <Link href="/upload" className="flex items-center text-white">
                <Plus className="w-5 h-5 mr-2" />
                New Summary
              </Link>
            </Button>
          </div>
          <div className="mb-6">
            <div
              className="bg-rose-50 border border-rose-200
            rounded-lg p-4 text-rose-800"
            >
              <p className="text-sm">
                You have reached the limit of {uploadLimit} uploads on the Basic
                plans{" "}
              </p>
              <Link
                href="/"
                className="text-rose-800 underline font-medium
              underline-offset-4 inline-flex items-center"
              >
                Click here to upgrade to Pro{" "}
                <ArrowRight className="w-4 h-4 inline-block"></ArrowRight>
              </Link>
              for unlimited uploads
            </div>
          </div>
        </div>
        {summaries.length === 0 ? (
          <EmptySummaryState />
        ) : (
          <div className="grid gri-cols-1 gap-4 sm:gap-6 md:gap-grid-cols-2 lg:grid-cols-3 sm:px-0">
            {summaries.map((summary, index) => (
              <Summarycard key={index} summary={summary} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
