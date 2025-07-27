import BgGradient from "@/components/common/bgGradient";
import CTAsection from "@/components/home/ctasection";
import Demosection from "@/components/home/demosection";
import Herosectoion from "@/components/home/herosection";
import Howitworks from "@/components/home/howitworks";
import Pricingsection from "@/components/home/pricingsection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <Herosectoion />
        <Demosection />
        <Howitworks />
        <Pricingsection />
        <CTAsection />
      </div>
    </div>
  );
}
