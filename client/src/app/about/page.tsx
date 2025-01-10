"use client";
import Image from "next/image";
import Link from "next/link";
import { LogoGrid } from "@/components/templates/LogoGrid";
import { Expertise } from "@/components/templates/IndustryExperience";
import { ArrowUpRight } from "lucide-react";
import ReadingList from "@/components/templates/ReadingList";

const page = () => {
  return (
    <section>
      {/* <section className="bg-black pt-12 relative lg:px-12"> */}

      <div className="relative overflow-hidden py-24 max-w-7xl mx-auto lg:px-16 px-8">
        <div className="inset-0 w-full h-full">
          <Image
            src="/images/profile-photo.jpg"
            className="rounded-2xl mx-auto"
            alt="Profile image"
            width={260}
            height={260}
          />
        </div>
      </div>

      {/* <div className="text-center px-14 md:px-24 lg:px-34"> */}
      <div className="text-center max-w-7xl mx-auto md:px-16 px-6">
        <h1 className="text-gray-300 font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight mb-8">
          I&apos;m Franklin Ohaegbulam. <br /> I ideate, design, and build
          softwares.
        </h1>
        <p className="mt-2 mb-6 text-left text-base sm:text-lg leading-7 text-zinc-400">
          I am an independent web developer specializing in building
          high-quality, intuitive websites and web applications using modern
          technologies frameworks like JavaScript, React, and Next.js.
        </p>
        <p className="mt-2 mb-6 text-left text-base  sm:text-lg leading-7 text-zinc-400">
          My journey in tech has been marked by a commitment to enhancing user
          experiences. I thrive in collaborative environments, working closely
          with UX designers to transform wireframes and designs from tools like
          Figma into intuitive user interfaces that meet user needs effectively.
          My focus on performance and accessibility ensures that applications
          are not only visually appealing but also fast and scalable.
        </p>
        <p className="mt-2 mb-6 text-left text-base sm:text-lg leading-7 text-zinc-400">
          With over four years of industry experience, I often share my
          knowledge on my{" "}
          <Link
            className="text-cyan-500"
            href="https://frankiefab.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog{" "}
            <span>
              <ArrowUpRight className="inline h-4 w-4" />
            </span>
          </Link>
          . When I'm not working on personal projects, I spend time reading
          books or blog posts, playing games, or learning a new language.
        </p>
        <p className="mt-2 mb-6 text-left text-base sm:text-lg leading-7 text-zinc-400">
          You can also check out my articles and tutorials on{" "}
          <Link
            href="https://freecodecamp.org"
            className="text-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreeCodeCamp.org,{" "}
          </Link>
          <Link
            href="https://inplainenglish.io"
            className="text-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            In Plain English,{" "}
          </Link>
          <Link
            href="https://developerdao.com"
            className="text-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer DAO,{" "}
          </Link>
          <Link
            href="https://reactplay.io"
            className="text-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Play,{" "}
          </Link>
          and {""}
          <Link
            href="https://web3afrika.com"
            className="text-cyan-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web3 Afrika{" "}
          </Link>
        </p>
      </div>

      <LogoGrid />

      <Expertise />

      <ReadingList />
    </section>
  );
};

export default page;
