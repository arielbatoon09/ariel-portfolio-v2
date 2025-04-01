import{ Linkedin, Github, Twitter, Facebook, MapPin } from "lucide-react";

export const NavigationData = {
  navbar: {
    data: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Projects", path: "/projects" },
      { label: "Blogs", path: "/blogs" },
      { label: "Contact", path: "/contact" },
    ]
  },
  footer: {
    data: [
      {
        "title": "Ariel Batoon",
        "description": "Software Developer",
        "location": {
          "label": "Cebu, Philippines",
          "icon": <MapPin className="inline text-emerald-700" size={16} />
        }
      },
      {
        "title": "Pages",
        "links": [
          { "label": "Home", "href": "/" },
          { "label": "Projects", "href": "/projects" },
          { "label": "About", "href": "/about" },
          { "label": "Contact", "href": "/contact" },
        ]
      },
      {
        "title": "Resources",
        "links": [
          { label: "GitHub Boilerplates", href: "https://github.com" },
          { label: "CodePen Examples", href: "https://codepen.io" },
          { label: "MDN Web Docs", href: "https://developer.mozilla.org" },
        ]
      },
      {
        "title": "Connect",
        "links": [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/arielbatoon/", icon: <Linkedin className="size-3" /> },
          { label: "GitHub", href: "https://github.com/arielbatoon09", icon: <Github className="size-3" /> },
          { label: "Twitter", href: "https://x.com/arielbatoon_com", icon: <Twitter className="size-3" /> },
          { label: "Facebook", href: "https://www.facebook.com/itsarielbatoon", icon: <Facebook className="size-3" /> },
        ]
      }
    ]
  }
}