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

const Header: React.FC = () => {
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

  const [mounted, setMounted] = useState(false);

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
        <div className="max-w-7xl mx-auto lg:px-16 px-6">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                className="w-auto h-7"
                src="/icons/favicon-32x32.png"
                alt="Frankiefab Logo"
                height={200}
                width={200}
                priority
              />
              <span className="md:block hidden text-sm font-inter font-light text-gray-800 dark:text-gray-200">
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
                      ? "text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-500 hover:dark:text-gray-400"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-colors border border-gray-200 dark:border-gray-800 hover:bg-gray-50/80 hover:dark:bg-gray-800/90"
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
                href="https://docs.google.com/document/d/18bITuQ5MpASxTJJxvoNtdDgmC6o3pf1o451wi0Tgs6k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                Resume
                <ChevronRight className="h-6 w-6" />
              </Link>
            </div>

            <div className="md:hidden flex">
              <button
                onClick={toggleTheme}
                className="p-2 mr-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50/80 hover:dark:bg-gray-800/90"
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
                className="p-2 rounded-md  border border-gray-200 dark:border-gray-800 hover:bg-gray-50/80 hover:dark:bg-gray-800/90"
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
        <div className="absolute w-full h-[50vh] px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#fafafa] dark:bg-[#000]">
          <div className="flex flex-col mt-6 space-y-6">
            {NAVIGATION_LINKS.map(([label, href, Icon]) => (
              <div key={href} className="flex items-center gap-3">
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex justify-start px-3 py-2 rounded-md text-base font-medium ${
                    pathname === href
                      ? "text-[#131313] dark:text-white bg-[#f4f4f4] dark:bg-gray-900 w-full"
                      : "text-gray-400 dark:text-gray-300 hover:text-[#131313] dark:hover:text-white hover:bg-[#f8f8f7] dark:hover:bg-gray-900"
                  }
                      `}
                >
                  <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  {label}
                </Link>
              </div>
            ))}
            <Link
              href="https://docs.google.com/document/d/18bITuQ5MpASxTJJxvoNtdDgmC6o3pf1o451wi0Tgs6k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="button"
              className="block ml-2 px-3 py-2 rounded-md w-28 text-center text-sm font-normal border border-gray-600 text-gray-600 dark:border-gray-300 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
