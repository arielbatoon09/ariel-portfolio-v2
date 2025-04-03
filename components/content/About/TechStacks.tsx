"use client"

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyData } from "@/lib/data/technology";
import { Code, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TechStacks({ className }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_CATEGORIES = 3;

  // Group Categories
  const groupedTech = TechnologyData.data.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof TechnologyData.data>);

  const categories = Object.entries(groupedTech);
  const displayCategories = isExpanded ? categories : categories.slice(0, INITIAL_CATEGORIES);
  const hasMore = categories.length > INITIAL_CATEGORIES;

  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-black/95">
          <Code className="h-4 w-4 sm:h-5 sm:w-5" />
          <h2 className="text-lg sm:text-xl font-semibold">Tech Stacks</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6">
          {displayCategories.map(([category, technologies]) => (
            <div key={category} className="space-y-2 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-medium text-black/90">{category}</h3>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {technologies.map((tech) => (
                  <span 
                    key={tech.name} 
                    className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md border border-black/10 hover:bg-black/5 transition-colors text-center cursor-arrow"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {hasMore && (
            <Button 
              variant="outline" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full sm:w-auto text-xs sm:text-sm"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
