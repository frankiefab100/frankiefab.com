// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Moon, ChevronRight } from "lucide-react";
// import { MobileNav } from "../MobileNav";
// import { NavLink } from "../NavLink";
// import { Button } from "../ui/Button";
// // import { useState } from "react";

// const NAVIGATION_ITEMS = [
//   ["About", "/about"],
//   ["Projects", "/projects"],
//   ["Blog", "/blog"],
//   ["Contact", "/contact"],
//   ["Speaking", "/talks"],
// ] as const;

// export default function Header() {
//   // const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50">
//       <nav className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-gray-900 px-6 md:px-14 lg:px-30">
//         {/* <nav className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"> */}
//         <div className="mx-auto px-4 max-w-7xl">
//           <div className="flex h-20 items-center justify-between">
//             <Link
//               href="/"
//               // onClick={() => setIsOpen(false)}
//               className="lg:flex md:flex items-center gap-2 sm:hidden hidden"
//             >
//               <div className="rounded-lg bg-white/10 p-2">
//                 <Image
//                   className="w-auto h-7"
//                   src="/favicon/favicon-192x192.png"
//                   alt="Frankiefab Logo"
//                   height={200}
//                   width={200}
//                   priority
//                 />
//               </div>
//               <span className="text-sm font-thin text-white">FRANKIEFAB</span>
//             </Link>

//             <div className="hidden md:flex items-center space-x-8">
//               {NAVIGATION_ITEMS.map(([label, href]) => (
//                 <NavLink key={href} href={href}>
//                   {label}
//                 </NavLink>
//               ))}
//             </div>

//             <div className="hidden md:flex items-center gap-4">
//               <button
//                 className="p-2 rounded-full text-gray-300  hover:text-white transition-colors border border-gray-400 hover:border-gray-600  hover:bg-white/10"
//                 aria-label="Toggle theme"
//               >
//                 <Moon className="h-5 w-5" />
//               </button>
//               <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 transition-colors">
//                 Resume <ChevronRight className="h-6 w-6" />
//               </Button>
//             </div>

//             <MobileNav />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

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

const NAVIGATION_LINKS = [
  ["About", "/about", UserCircle],
  ["Projects", "/projects", Folders],
  ["Blog", "/blog", RssIcon],
  ["Contact", "/contact", ContactIcon],
  ["Speaking", "/talks", PodcastIcon],
] as const;

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-gray-800 backdrop-blur">
        {/* <nav className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"> */}
        <div className="mx-auto max-w-7xl md:px-16 px-8">
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
              <span className="text-sm font-thin text-white">FRANKIEFAB</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    pathname === href ? "text-white" : "text-gray-300"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-300 hover:text-white transition-colors border border-gray-400 hover:border-gray-600 hover:bg-white/10"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? (
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
                {isDarkMode ? (
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
