import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CTASection({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="bg-black/90 container max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center py-16 text-center space-y-6 md:rounded-lg">
        <h3 className="text-4xl font-bold text-white">Let's Build Something Great Together</h3>
        <p className="text-white/75">Let's work together to bring your ideas to life and create something amazing.</p>
        <Button variant="outline" size="lg">Get in Touch</Button>
      </div>
    </section>
  );
}