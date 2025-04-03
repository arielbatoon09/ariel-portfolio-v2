import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CTASection({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black container max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center py-16 text-center space-y-6 md:rounded-lg">
        <h2 className="text-4xl font-bold text-white">Need help building something?</h2>
        <p className="text-white/75 w-full md:max-w-xl">Whether you&apos;re searching for a dedicated partner to develop your project or simply need expert support, I&apos;m here to help.</p>
        <Button variant="outline" size="lg">Get in Touch</Button>
      </div>
    </section>
  );
}