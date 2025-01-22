"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import ServicesSection from "@/components/templates/Specializations";
import TechStacks from "@/components/templates/TechStacks";
import { RepoCarousel } from "@/components/templates/RepoCarousel";
import { GetInTouch } from "@/components/templates/GetInTouch";
// import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-background min-h-screen z-20 text-gray-800 dark:text-white lg:px-32 md:px-16 px-4">
      {/* <div className="relative z-20 text-center text-gray-800 dark:text-white mx-auto lg:px-16 md:px-8 sm:px-4"> */}
      {/* Hero Section */}
      <div className="py-48 flex flex-col items-center justify-center space-y-8">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
          <Image
            src="/images/profile-photo.jpg"
            alt="Profile image"
            className="object-cover relative z-0"
            fill
          />

          <div
            // <motion.div
            className="absolute bottom-4 right-4 flex items-center justify-center h-8 w-8 rounded-full bg-white/90 text-lg z-30"
            // animate={{
            //   rotate: [0, 20, 0, 20, 0],
            // }}
            // transition={{
            //   duration: 1.5,
            //   repeat: Infinity,
            //   repeatDelay: 1,
            //   ease: "easeInOut",
            // }}
            // style={{
            //   originX: 0.7,
            //   originY: 0.7,
            // }}
          >
            👋
          </div>
          {/* </motion.div> */}
        </div>

        <div className="text-center lg:px-80 md:px-36">
          <h1 className="font-Bitform text-2xl md:text-3xl lg:text-5xl text-center">
            Frontend Engineer, Designer & Technical Writer
          </h1>
          <p className="mt-3 text-base md:text-lg leading-5 text-gray-500 dark:text-gray-400">
            With 4 years of professional experience in building responsive user
            interfaces and digital experiences to meet user&apos;s needs.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <Link
            href="https://twitter.com/frankiefab100"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com/in/frankiefab100"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/frankiefab100"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://dribbble.com/frankiefab100"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            <Dribbble className="h-6 w-6" />
            <span className="sr-only">Dribbble</span>
          </Link>
        </div>

        <Link href="#getintouch">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <div className="relative flex items-center space-x-2">
                <span className="text-white font-medium">Available for</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-400 flex items-center">
                  Work
                  <ArrowRight className="ml-1 h-4 w-4" />
                  <span className="sr-only">Right Arrow</span>
                </span>
              </div>
            </span>
          </button>
        </Link>
      </div>

      <ServicesSection />

      <TechStacks />

      <RepoCarousel username={"frankiefab100"} />

      <GetInTouch />
      {/* </div> */}
    </div>
  );
}
