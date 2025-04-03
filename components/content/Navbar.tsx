"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationData } from "@/lib/data/navigations";
import { NoticeBanner } from "@/components/ui/notice-banner";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active link position for animation
  const [activeStyles, setActiveStyles] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active") as HTMLElement;
    if (activeLink && navRef.current) {
      setActiveStyles({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [currentPath]);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled && !isMenuOpen ? "backdrop-blur-md bg-white/50" : "bg-gray-50"
        )}
      >
        <NoticeBanner />
        <nav className="container max-w-screen-lg mx-auto flex justify-between items-center px-4 py-4 relative">
          {/* Branding */}
          <Link href="/" className="flex flex-col z-50">
            <span className="text-base font-semibold text-gray-700">Ariel Batoon</span>
            <span className="text-sm text-gray-600">Software Developer</span>
          </Link>

          {/* Desktop Navigations */}
          <div ref={navRef} className="hidden md:flex items-center gap-4 relative">
            {NavigationData.navbar.data.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={cn(
                  "nav-link font-normal text-sm text-black/50 p-2 relative transition-all rounded-md z-50",
                  currentPath === link.path
                    ? "active text-black bg-gray-100"
                    : "hover:text-black/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="absolute h-9 bg-gray-100 rounded-lg transition-all duration-300 z-40"
              style={{ left: activeStyles.left, width: activeStyles.width }}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black/90 hover:text-brand transition-colors z-50"
          >
            {isMenuOpen ? <X className="text-black/75" size={24} /> : <Menu className="text-black/75" size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu (Placed under the navbar) */}
      <div
        className={cn(
          "fixed top-[64px] left-0 w-full bg-gray-50 shadow-md transition-transform transform z-40 md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col space-y-2 py-6 px-4">
          {NavigationData.navbar.data.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "py-2 px-4 rounded-md transition-all",
                currentPath === path
                  ? "text-black bg-black/5"
                  : "text-black/90 hover:bg-gray-100"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop (covers the rest of the page, but not the header) */}
      
      {isMenuOpen && (
        <div
          className="fixed top-[64px] left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
