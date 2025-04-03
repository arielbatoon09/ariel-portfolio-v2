"use client"

import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectData } from "@/lib/data/projects";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ProjectListing({ className }: { className?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(ProjectData.data.flatMap((project) => project.technologies))
  ).sort();

  // Filter projects based on search query and selected technology
  const filteredProjects = ProjectData.data.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = !selectedTech || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-black/90 mb-4">My Projects</h2>
          <p className="text-black/75 leading-relaxed">
            A collection of my work showcasing my skills and experience in web development.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedTech === null ? "default" : "outline"}
              className="cursor-pointer hover:bg-black/10 transition-colors"
              onClick={() => setSelectedTech(null)}
            >
              All
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                className="cursor-pointer hover:bg-black/10 transition-colors"
                onClick={() => setSelectedTech(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
              <ProjectCard key={index}
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-black/60">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
