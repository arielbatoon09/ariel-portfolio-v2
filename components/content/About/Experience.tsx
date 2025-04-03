import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { ExperienceData } from "@/lib/data/experience";

export function Experience({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black/95">
          <Building2 className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Experience</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-6">
        <div className="absolute left-7.5 top-1.5 bottom-2 w-px bg-gray-300"></div>

        {/* Experience */}
        {ExperienceData.data?.map((experience, index) => (
          <div key={index} className="relative pl-6">
            {index === 0 ? (
              <span className="absolute left-0 top-1.5 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/75 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-black/75"></span>
              </span>
            ) : (
              <span className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-gray-400 bg-white hover:bg-black/75 transition-colors"></span>
            )}
            
            {/* Details */}
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-black/90 transition-colors">
                {experience.title}
              </h3>
              <div className="flex flex-col justify-center items-start gap-2">
                <span className="text-xs text-gray-700">{experience.company}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-gray-100 border border-gray-300">
                  {experience.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}