import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Codepen,
  Codesandbox,
  Wallet,
} from "lucide-react";
import { SiBehance, SiProducthunt } from "react-icons/si";

const Footer = () => {
  return (
    <section className="py-12 px-0 md:px-10 lg:px-16 bg-gradient-to-r from-gray-100 via-gray-200 to-white dark:bg-gradient-to-r dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="mx-auto max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <Image
              className="w-auto mx-auto h-7"
              src="/favicon/favicon-192x192.png"
              alt="Frankiefab Logo"
              height={200}
              width={200}
            />
            <p className="mt-5 text-sm text-gray-700 dark:text-gray-300 xl:ml-6 xl:mt-0">
              &copy; Copyright {new Date().getFullYear()} Frankiefab
            </p>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 xl:justify-end">
              <Link href="/about">
                <span className="text-sm text-gray-700 dark:text-gray-200 transition-all duration-200 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                  About
                </span>
              </Link>

              <Link href="/projects">
                <span className="text-sm text-gray-700 dark:text-gray-200 transition-all duration-200 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                  Projects
                </span>
              </Link>

              <Link href="/blog">
                <span className="text-sm text-gray-700 dark:text-gray-200 transition-all duration-200 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                  Blog
                </span>
              </Link>

              <Link href="/contact">
                <span className="text-sm text-gray-700 dark:text-gray-200 transition-all duration-200 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                  Contact
                </span>
              </Link>
            </ul>

            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-5 bg-gray-500 dark:bg-gray-50/20"></div>

            <ul className="flex items-center justify-center space-x-4 md:space-x-5 xl:justify-end">
              <Link
                href="https://twitter.com/frankiefab100"
                title="Twitter"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/frankiefab100"
                title="github"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Link>
              <Link
                href="https://linkedin.com/in/frankiefab100"
                title="linkedin"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </Link>
              <Link
                href="https://instagram.com/frankiefab100"
                title="Instagram"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://behance.net/frankiefab100"
                title="Behance"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiBehance className="h-5 w-5" />
                <span className="sr-only">Behance</span>
              </Link>
              <Link
                href="https://producthunt.com/frankiefab100"
                title="Producthunt"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiProducthunt className="h-5 w-5" />
                <span className="sr-only">Producthunt</span>
              </Link>
              <Link
                href="https://codepen.io/frankiefab100"
                title="codepen"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Codepen className="h-5 w-5" />
                <span className="sr-only">Codesandbox</span>
              </Link>
              <Link
                href="https://codesandbox.io/frankiefab100"
                title="codesandbox"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Codesandbox className="h-5 w-5" />
                <span className="sr-only">Rainbow wallet</span>
              </Link>
              <Link
                href="https://rainbow.me/frankiefab.eth"
                title="rainbow-wallet"
                className="block text-gray-600 dark:text-gray-300 transition-all duration-200 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Wallet className="h-5 w-5" />
                <span className="sr-only">Crypto Wallet</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
