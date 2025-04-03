"use client"

import { cn } from "@/lib/utils";
import { ContactContent } from "./Contact/ContactContent";
import { ContactForm } from "./Contact/ContactForm";

export function Contact({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-50", className)}>
      <div className="container max-w-screen-lg mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Let&apos;s get in touch!</h2>
          <p className="text-gray-600">You can reach us at the following</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ContactContent />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

