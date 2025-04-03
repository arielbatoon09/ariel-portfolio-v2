import { cn } from "@/lib/utils";
import { AboutMe } from "./About/AboutMe";
import { Experience } from "./About/Experience";
import { TechStacks } from "./About/TechStacks";

export function AboutDescription({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <AboutMe className="col-span-1 md:col-span-3" />
          <Experience className="col-span-1 md:col-span-1 md:row-span-1" />
          <TechStacks className="col-span-1 md:col-span-4" />
        </div>
      </div>
    </section>
  );
}