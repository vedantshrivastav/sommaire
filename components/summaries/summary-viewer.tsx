"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { NavigationControls } from "./navigation-controls";
import ProgressBar from "./progress-bar";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div
      className="flex flex-col gap-2 mb-6 sticky
   top-2 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10"
    >
      <h2
        className="text-3xl lg:text-4xl ffont-bold
      text-center flex items-center justify-center gap-2"
      >
        {title}
      </h2>
    </div>
  );
};

const parseSection = (section: string) => {
  const [title, content] = section.split("\n");
  const cleanTitle = title.startsWith("#")
    ? title.substring(1).trim()
    : title.trim();

  let points: string[] = [];
  let currentpoint = "";
  const lines = content.split("\n");
  lines.forEach((line) => {
    const trimmedline = line.trim();
    if (trimmedline.startsWith("*")) {
      if (currentpoint) points.push(currentpoint.trim());
      currentpoint = trimmedline;
    } else if (!trimmedline) {
      if (currentpoint) points.push(currentpoint.trim());
      currentpoint = "";
    } else {
      currentpoint += " " + trimmedline;
    }
  });
  if (currentpoint) points.push(currentpoint.trim());
  return {
    title: cleanTitle,
    points: points.filter((point) => point && !point.startsWith("#")),
  };
};

export default function SummaryViewer({ summary }: { summary: string }) {
  const [currentsection, setcurrentsection] = useState(0);

  const handleNext = () => {
    setcurrentsection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const handlePrevious = () => {
    setcurrentsection((prev) => Math.max(prev - 1, 0));
  };
  const sections = summary
    .split("\n#")
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);
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
      <ProgressBar sections={sections} currentSection={currentsection} />
      {/* {JSON.stringify(sections[currentsection].points)} */}
      <div
        className="h-full overflow-y-auto scrollbar-hide
        pt-12 sm:pt-16 pb-20 sm:pb-24"
      >
        <div className="px-4 sm:px-6 ">
          <SectionTitle title={sections[currentsection].title} />
          <ul>
            {sections[currentsection]?.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <NavigationControls
        currentSection={currentsection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={setcurrentsection}
      />
    </Card>
  );
}
