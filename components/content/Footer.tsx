import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterLocation {
  icon: React.ReactNode;
  label: string;
}

interface FooterItem {
  title: string;
  description?: string;
  location?: FooterLocation;
  links?: FooterLink[];
}

interface FooterProps {
  data: FooterItem[];
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-gray-50">
      <div className="container max-w-screen-lg mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-24">
          {/* About Column */}
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-lg text-black/80">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-black/75">{item.description}</p>
              )}
              {item.location && (
                <div className="flex items-center text-sm text-black/75">
                  {item.location.icon}
                  <span className="ml-1">{item.location.label}</span>
                </div>
              )}
              <ul className="text-sm space-y-1">
                {item.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-black/75 hover:text-black/90 hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center py-4 mt-6 border-t border-black/20">
          <p className="text-sm text-gray-500 -mb-4">
            © {new Date().getFullYear()} Ariel Batoon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}