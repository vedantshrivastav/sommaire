"use client";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <Card
      className="relative px-2
      h-[500px] sm:h-[600px] lg:h-[700px]
      w-full xl:w-[600px]
      overflow-hidden
      bg-linear-to-br from-background via-background/90 to-rose-500/5
      backdrop-blur-lg shadow-2xl rounded-3xl
      border border-rose-500/10"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-muted">
        <Skeleton className="h-full w-1/4 bg-primary" />
      </div>

      <div className="h-full overflow-y-auto pt-12 sm:pt-16 pb-20 sm:pb-24 px-4 sm:px-6 scrollbar-hide">
        {/* Section Title */}
        <div className="flex flex-col gap-2 mb-6 sticky top-2 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10">
          <Skeleton className="h-8 w-3/4 mx-auto" />
        </div>

        {/* Bullet Points */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start gap-2">
              <Skeleton className="h-3 w-3 rounded-full shrink-0 mt-2 bg-muted" />
              <Skeleton className="h-4 w-full sm:w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-0 w-full flex justify-between px-4 sm:px-6">
        <Skeleton className="h-10 w-20 rounded-full" />
        <Skeleton className="h-10 w-20 rounded-full" />
      </div>
    </Card>
  );
}
