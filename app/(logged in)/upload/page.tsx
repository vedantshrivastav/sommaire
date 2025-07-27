import BgGradient from "@/components/common/bgGradient";
import { Badge } from "@/components/ui/badge";
import Uploadform from "@/components/upload/uploadform";
import Uploadheader from "@/components/upload/uploadheader";
import { Sparkles } from "lucide-react";

export default function Page() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="flex flex-col items-center
        justify-center gap-6 text-center"
        >
          <Uploadheader />
          <Uploadform />
        </div>
      </div>
    </section>
  );
}
