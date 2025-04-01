import Link from "next/link";
import { Github, Linkedin, Facebook, Twitter } from "lucide-react";

export function Socials() {
  return (
    <div className="flex gap-4 mt-6">
      <Link href="www.linkedin.com/in/arielbatoon" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
      <Link href="https://github.com/arielbatoon09" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
      <Link href="https://x.com/arielbatoon_com" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
      <Link href="https://www.facebook.com/itsarielbatoon" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-black/30 hover:text-black/75 active:scale-90 active:text-black/75 transition-transform duration-300 hover:-translate-y-1" />
      </Link>
    </div>
  );
}