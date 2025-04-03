import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function AboutProfile({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="relative w-full h-[12rem] md:h-[16rem]">
          <div className="rounded-lg md:rounded-2xl w-full h-full bg-neutral-900/5 bg-[url('/building.jpg')] bg-cover bg-center md:bg-bottom transition-all duration-500">
            <div className="absolute w-full flex flex-col md:flex-row items-center md:items-end md:justify-start gap-3 md:gap-6 left-0 px-4 md:px-6 bottom-[-6rem] md:bottom-[-4.5rem]">
              <Image
                className="ring-4 bg-gradient-to-br from-gray-900 to-gray-700 size-24 md:size-38 transition-all duration-300 hover:scale-105 ring-neutral-700/20 aspect-square rounded-full"
                src="/ariel-banner-image.png"
                height={300}
                width={300}
                alt="Profile"
                priority
                quality={100}
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-medium text-black/75 font-sans">Ariel Batoon</h2>
                <p className="text-sm md:text-base text-black/50 italic font-sans">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
