import { Mail, Phone, Github, Linkedin, Twitter, Facebook } from "lucide-react";

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
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Email</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <a href="mailto:contact@pocketdevs.ph" className="hover:text-black">
              contact@pocketdevs.ph
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-1">We usually email you back within an hour</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Phone</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-4 h-4" />
            <a href="tel:+639051210329" className="hover:text-black">
              +63 (905) 121 0329
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-1">We&apos;re available weekdays from 9AM to 5PM</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-medium mb-4">Connect with us</h3>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors p-2 rounded-md hover:bg-gray-50"
            >
              {social.icon}
              <span className="text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
