import { cn } from "@/lib/utils"

export function AboutProfile({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-semibold w-full font-sans leading-9 text-black/90">About Me</h1>
        
      </div>
    </section>
  )
}