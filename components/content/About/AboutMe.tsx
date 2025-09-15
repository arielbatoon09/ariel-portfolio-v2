import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, Facebook, Linkedin, Github, Twitter } from "lucide-react";

export function AboutMe({ className }: { className?: string }) {
  return (
    <Card className={cn("shadow-none bg-white/20", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-black/95">
          <BriefcaseBusiness className="h-5 w-5" />
          <h2 className="text-xl font-semibold">About</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Hi there, I&apos;m <span className="whitespace-nowrap border w-max border-[#EBEBEB] text-[13px] rounded-[0.375rem] py-[3px] px-[5px]">Ariel</span>. I&apos;m a Software Developer passionate on developing high-performance applications that seamlessly bridge web and mobile experiences.
        </p>

        <p>
          I specialize in designing and building scalable, user-centric solutions, from dynamic websites to complex custom applications. My focus is on performance, accessibility, and delivering exceptional user experiences through modern technologies.
        </p>

        <p>
          With nearly three years of experience spanning freelance and corporate, I&apos;ve worked on everything from sleek marketing websites to enterprise-grade applications. My approach is always rooted in efficiency, scalability, and innovation.
          I collaborate with both local and international clients, helping businesses turn ideas into impactful digital products.
        </p>

        <p>
          Recently, I&apos;m currently focused on integrating AI into applications to enhance automation, efficiency, and user engagement.
        </p>

        <div className="flex gap-14 mt-4">
          <div className="space-y-3">
            <h3 className="text-black/75 font-medium">Socials</h3>
            <div className="flex items-center gap-2 hover:text-black/80 transition-colors duration-300">
              <Linkedin size={14} />
              <Link href="https://www.linkedin.com/in/arielbatoon/" target="_blank" className="text-sm mt-0.5">LinkedIn</Link>
            </div>
            <div className="flex items-center gap-2 hover:text-black/80 transition-colors duration-300">
              <Github size={14} />
              <Link href="https://github.com/arielbatoon09" target="_blank" className="text-sm mt-0.5">GitHub</Link>
            </div>
            <div className="flex items-center gap-2 hover:text-black/80 transition-colors duration-300">
              <Twitter size={14} />
              <Link href="https://x.com/arielbatoon_com" target="_blank" className="text-sm mt-0.5">Twitter</Link>
            </div>
            <div className="flex items-center gap-2 hover:text-black/80 transition-colors duration-300">
              <Facebook size={14} />
              <Link href="https://www.facebook.com/itsarielbatoon/" target="_blank" className="text-sm mt-0.5">Facebook</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-black/75 font-medium">Contact</h3>
            <Link href="mailto:info.arielbatoon@gmail.com" className="text-sm block hover:text-black/80 transition-colors duration-300">info.arielbatoon@gmail.com</Link>
            <Link href="tel:+639171234567" className="text-sm block hover:text-black/80 transition-colors duration-300">+63 917 123 4567</Link>
            <p className="text-sm hover:text-black/80 transition-colors duration-300 cursor-pointer">Cebu, Philippines</p>
          </div>
        </div>

        <Link href="https://docs.google.com/document/d/1lPeJiZvXMfvb_KzNv4XROWRX2kel4v-H/edit?usp=sharing&ouid=113866748336192238785&rtpof=true&sd=true" target="_blank">
          <Button>Download Resume</Button>
        </Link>
      </CardContent>
    </Card>
  )
}