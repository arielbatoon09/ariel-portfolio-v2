import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectData } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";

export function RecentProjects({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 space-y-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-block mb-2">
            <p className="bg-black/5 text-black/90 px-2.5 py-0.5 rounded-md">Recent Projects</p>
          </div>
          <h2 className="text-4xl font-bold leading-9 text-black/90 mb-4">Check out my recent work</h2>
          <p className="leading-relaxed text-black/75">I’ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto">
          {ProjectData.data.map((project, id) => (
            <ProjectCard key={id}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>

        <Link href="/projects" className="flex items-center gap-2 hover:bg-transparent hover:text-black/40 font-semibold transition-colors duration-200 ease-in-out text-black/75">
          More projects <ArrowRight className="w-4 h-4 mt-1" />
        </Link>
      </div>
    </section>
  )
}