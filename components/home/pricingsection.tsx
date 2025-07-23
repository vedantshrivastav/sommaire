import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type Plans = {
  id: string;
  name: string;
  description: string;
  price: number;
  items: String[];
};
const plans: Plans[] = [
  {
    id: "Basic",
    name: "Basic",
    description: "For average use",
    price: 9,
    items: [
      "5 PDF summaries per month",
      "Basic AI summarization",
      "Access to web dashboard",
      "Email support",
    ],
  },
  {
    id: "Pro",
    name: "Pro",
    description: "For professionals and power users",
    price: 19,
    items: [
      "50 PDF summaries per month",
      "Advanced AI summarization",
      "Priority processing",
      "Export summaries (PDF, DOCX)",
      "Priority email support",
    ],
  },
];

const Pricingcard = ({ name, price, description, id, items }: Plans) => {
  return (
    <div
      className="relative w-full max-w-lg hover:scale-105
    hover:transition-all duration-300"
    >
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 rounded-xl border-[1px]",
          "border-gray-500/20 rounded-2xl",
          id === "Pro" && "border-rose-500 gap-5 border-2"
        )}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-extrabold">${price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>
        <div className="space-y-2.5 leading-relaxed text-base flex-1">
          {items.map((item, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <CheckIcon size={18} />
              <span>{item}</span>
            </li>
          ))}
        </div>
        <div className="space-y-2 flex justify-center w-full">
          <Link
            href={""}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2",
              "bg-gradient-to-r from-rose-800 to-rose-500",
              "hover:from-rose-500 hover:to-rose-800",
              "text-white border-2 py-2",
              id === "Pro"
                ? "border-rose-900"
                : "border-rose-100 from-rose-400 to-rose-500"
            )}
          >
            {" "}
            Buy Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default function Pricingsection() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          className="flex items-center justify-center w-full
        pb-12"
        >
          <h2
            className="uppercase font-bold text-xl
          mb-8 text-rose-500"
          >
            Pricing
          </h2>
        </div>
        <div
          className="relative flex justify-center flex-col lg:flex-row items-center
        lg:items-stretch gap-8"
        >
          {plans.map((plan) => (
            <Pricingcard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
