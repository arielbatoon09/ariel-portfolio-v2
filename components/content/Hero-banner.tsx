import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { StatusIndicator } from "../common/StatusIndicator";
import { Socials } from "./Socials";

export function HeroBanner({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Text Content */}
          <div>
            <StatusIndicator />
            <h1 className="font-bold w-full text-4xl leading-9">Hey, I’m Ariel
              <span className="ml-1 inline-block origin-bottom-right animate-wave cursor-pointer">
                <Image className="" src="/waving-hand.svg" height={42} width={42} alt="wave hand" />
              </span>
            </h1>
            <p className="leading-relaxed py-4">
              A full-stack developer specializing in JavaScript & PHP. I create high-performance websites, web applications, and SEO-driven solutions.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <Button>Get a Free Quote</Button>
              <Button variant="outline">Let’s Talk</Button>
            </div>
            <div className="hidden md:block">
              <Socials />
            </div>
          </div>

          {/* Image Container */}
          <div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
              <Image src="/ariel-banner-image.png" alt="Ariel Batoon Profile" height={500}
                width={350} className="object-cover" style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
            <div className="md:hidden flex justify-center">
              <Socials />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}