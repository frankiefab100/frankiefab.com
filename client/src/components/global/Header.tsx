"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  ContactIcon,
  Folders,
  Menu,
  Moon,
  PodcastIcon,
  RssIcon,
  Sun,
  UserCircle,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

const NAVIGATION_LINKS = [
  ["About", "/about", UserCircle],
  ["Projects", "/projects", Folders],
  ["Blog", "/blog", RssIcon],
  ["Contact", "/contact", ContactIcon],
  ["Speaking", "/talks", PodcastIcon],
] as const;

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // const [theme, setTheme] = useTheme();
  const [mounted, setMounted] = useState(false);

  // This effect ensures that we only render the theme toggle UI after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration issues

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-gray-200 dark:border-gray-800 backdrop-blur">
        {/* <nav className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"> */}
        <div className="mx-auto lg:px-32 md:px-16 px-4">
          {/* <div className="mx-auto px-8 md:px-16 max-w-7xl"> */}
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* <div className="rounded-lg bg-white/10 p-2"> */}
              <Image
                className="w-auto h-7"
                src="/icons/favicon-32x32.png"
                alt="Frankiefab Logo"
                height={200}
                width={200}
                priority
              />
              {/* </div> */}
              <span className="text-sm font-thin text-gray-800 dark:text-gray-200">
                FRANKIEFAB
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    pathname === href
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full  transition-colors border border-gray-400 hover:border-blue-50 hover:bg-blue-50 hover:dark:border-gray-600 hover:dark:bg-white/10"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Moon className="h-6 w-6" />
                ) : (
                  <Sun className="h-6 w-6" />
                )}
              </button>
              <Link
                href="/resume"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                Resume
                <ChevronRight className="h-6 w-6" />
              </Link>

              {/* <Button
              className="hidden bg-primary hover:bg-primary/90 text-white"
            >
              Resume <ChevronRight className="h-6 w-6" />
            </Button> */}
            </div>

            <div className="md:hidden flex">
              <button
                onClick={toggleTheme}
                className="p-2 mr-3 rounded-full text-gray-300 hover:text-white transition-colors border border-gray-400 hover:border-gray-600  hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white transition-colors border border-gray-400 hover:border-gray-600  hover:bg-white/10"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        // <div className="md:hidden">
        //  <div className="md:hidden flex flex-col h-full bg-gray-900 px-10 pb-16">
        <div className="absolute w-full h-[50vh] px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-950">
          <div className="flex flex-col mt-14 space-y-6">
            {NAVIGATION_LINKS.map(([label, href, Icon]) => (
              <div
                key={href}
                className="flex items-center gap-3  hover:text-white hover:bg-gray-900"
              >
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex  justify-start px-3 py-2 rounded-md text-base font-medium ${
                    pathname === href
                      ? "text-white bg-gray-900 w-full"
                      : "text-gray-300 hover:text-white hover:bg-gray-900"
                  }
                      `}
                >
                  <Icon className="h-5 w-5 text-gray-400 mr-2" />
                  {label}
                </Link>
              </div>
            ))}
            {/* <Link
              href="/resume"
              className="block mt-4 px-3 py-3 rounded-md w-28 text-center text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
