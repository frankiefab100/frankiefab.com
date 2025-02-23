"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Github, Dribbble } from "lucide-react";
import { SiHashnode, SiX } from "react-icons/si";
import { motion } from "motion/react";
import ImageWebp from "../../assets/images/profile-photo.webp";
import ImageJpg from "../../assets/images/profile-photo.jpg";

const Hero: React.FC = () => {
  return (
    <div className="pt-52 pb-64 flex flex-col items-center justify-center">
      <div className="mb-2 relative w-20 h-20">
        <div className="rounded-2xl overflow-hidden h-full w-full bg-cyan-50">
          <picture>
            <source srcSet={ImageWebp.src} type="image/webp" />
            <source srcSet={ImageJpg.src} type="image/jpeg" />
            <Image
              src={ImageJpg.src}
              alt="Profile image"
              className="object-cover"
              layout="responsive"
              width={120}
              height={120}
            />
          </picture>
        </div>

        <div className="relative">
          <span className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gray-100 shadow-md z-10 flex justify-center items-center">
            <motion.span
              animate={{
                rotate: [0, 20, 0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              style={{
                originX: 0.7,
                originY: 0.7,
              }}
            >
              👋
            </motion.span>
          </span>
        </div>
      </div>

      <div className="text-center max-w-3xl space-y-2">
        <h1 className="font-Bitform font-bold text-2xl md:text-3xl lg:text-5xl text-center">
          Frontend Engineer, Designer <br /> & Technical Writer
        </h1>
        <p className="italic text-base md:text-lg md:leading-7 leading-6 text-gray-500 dark:text-gray-400">
          With over 4 years of professional experience in crafting responsive
          user interfaces that drive meaningful digital experiences.
        </p>
      </div>

      <div className="flex items-center justify-center md:space-x-6 space-x-4 my-4">
        <Link
          href="https://twitter.com/frankiefab100"
          className="text-gray-600 dark:text-gray-300 dark:hover:text-blue-500 hover:text-blue-500 transition-colors"
        >
          <SiX className="md:h-6 md:w-6 h-5 w-5" />
          <span className="sr-only">Twitter/X</span>
        </Link>
        <Link
          href="https://linkedin.com/in/frankiefab100"
          className="text-gray-600 dark:text-gray-300 dark:hover:text-blue-500 hover:text-blue-500 transition-colors"
        >
          <Linkedin className="md:h-6 md:w-6 h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/frankiefab100"
          className="text-gray-600 dark:text-gray-300 dark:hover:text-blue-500 hover:text-blue-500 transition-colors"
        >
          <Github className="md:h-6 md:w-6 h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://frankiefab.hashnode.dev"
          className="text-gray-600 dark:text-gray-300 dark:hover:text-blue-500 hover:text-blue-500 transition-colors"
        >
          <SiHashnode className="md:h-6 md:w-6 h-5 w-5" />
          <span className="sr-only">Hashnode</span>
        </Link>
        <Link
          href="https://dribbble.com/frankiefab100"
          className="text-gray-600 dark:text-gray-300 dark:hover:text-blue-500 hover:text-blue-500 transition-colors"
        >
          <Dribbble className="md:h-6 md:w-6 h-5 w-5" />
          <span className="sr-only">Dribbble</span>
        </Link>
      </div>

      <Link href="#getintouch">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 dark:bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl">
            <div className="relative flex items-center space-x-2">
              <span className="text-gray-700 dark:text-white font-medium">
                Available for Work
              </span>
              <span className="text-gray-500 dark:text-gray-400 flex items-center">
                <ArrowRight className="ml-1 h-4 w-4" />
                <span className="sr-only">Right Arrow</span>
              </span>
            </div>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Hero;
