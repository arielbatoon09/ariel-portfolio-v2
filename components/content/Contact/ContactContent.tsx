import Link from "next/link";
import { Mail, Phone, Github, Linkedin, Twitter, Facebook, MessageSquare, Clock } from "lucide-react";

export function ContactContent() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/arielbatoon/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/arielbatoon09",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/arielbatoon_com",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/itsarielbatoon",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-medium text-lg">Email</h3>
          </div>
          <Link href="mailto:info.arielbatoon@gmail.com" className="text-gray-300 hover:text-white transition-colors block mb-2">
            info.arielbatoon@gmail.com
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MessageSquare className="w-4 h-4" />
            <span>I usually email you back within an hour.</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-medium text-lg">Phone</h3>
          </div>
          <Link href="tel:+639674214639" className="text-gray-300 hover:text-white transition-colors block mb-2">
            +63 (967) 421 4639
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>I&apos;m available weekdays from 9AM to 6PM</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-medium text-lg text-white">Connect with me</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all p-3 rounded-lg hover:bg-white/5 border border-white/10"
            >
              <div className="p-1.5 rounded-md group-hover:bg-white/10 transition-colors">
                {social.icon}
              </div>
              <span className="text-sm font-medium">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
