"use client";
import Image from "next/image";
import Link from "next/link";
import { LogoSlider } from "@/components/templates/LogoSlider";
import { Expertise } from "@/components/templates/IndustryExperience";
import { ArrowUpRight } from "lucide-react";
import ReadingList from "@/components/templates/ReadingList";

const About = () => {
  return (
    <section
      id="about"
      // className="py-5 md:py-24 max-w-7xl mx-auto lg:px-16 px-6"
    >
      <div className="relative overflow-hidden py-24 max-w-7xl mx-auto lg:px-16 px-6">
        <div className="inset-0 w-full h-full">
          <Image
            src="/images/profile-photo.jpg"
            className="rounded-2xl mx-auto md:w-64 md:h-auto"
            alt="Profile image"
            width={200}
            height={200}
          />
        </div>
        <div className="text-center">
          <h1 className="text-gray-800 dark:text-gray-200 font-semibold lg:text-5xl md:text-3xl text-2xl tracking-tight lg:leading-tight md:my-8 my-4">
            I&apos;m Franklin Ohaegbulam. <br />{" "}
            <span className="text-gray-800/50 dark:text-gray-200/40">
              I ideate, design, and build softwares.
            </span>
          </h1>
          <div className="my-4 text-left text-base sm:text-lg leading-6 text-gray-700 dark:text-gray-400">
            <p className="md:my-4 my-3">
              Hi, I&apos;m a Frontend Software Engineer with a passion for
              building innovative projects. My curiosity about technology led me
              to learn programming and ultimately choose it as my career path.
            </p>
            <p>
              Before diving into web and software development, I worked as a
              graphic designer, providing branding and social media design
              services. This experience deepened my understanding of design
              principles such as color theory, visual hierarchy, Jakob&apos;s
              Usability Heuristics, and concepts like the golden ratio and the
              rule of thirds.
            </p>
            <p className="md:my-4 my-3">
              I focus on crafting user interfaces that are user-friendly,
              responsive, and visually appealing for web and mobile
              applications. I'm particularly interested in software engineering,
              blockchain technology, artificial intelligence, renewable energy,
              and the Internet of Things. Recently, I&apos;ve been honing my
              skills in design engineering and learning {""}
              <Link
                href="https://www.python.org"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Python
              </Link>
              .
            </p>
            <p className="md:my-4 my-3">
              Outside of work, I love reading and expanding my vocabulary in new
              languages—I aspire to be a polyglot. In my free time, I love
              playing games, listening to{" "}
              <Link
                href="https://open.spotify.com/user/31atuvd2zlnivkukklqff2deltgy"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                music
              </Link>{" "}
              , and traveling. I enjoy sharing my knowledge and experiences
              through my {""}
              <Link
                href="https://frankiefab.hashnode.dev"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog
              </Link>{" "}
              and have had the opportunity to write for platforms like{" "}
              <Link
                href="https://freecodecamp.org"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                FreeCodeCamp.org,{" "}
              </Link>
              <Link
                href="https://inplainenglish.io"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                In Plain English,{" "}
              </Link>
              <Link
                href="https://developerdao.com"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer DAO,{" "}
              </Link>
              <Link
                href="https://reactplay.io"
                className="italic hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Play,{" "}
              </Link>{" "}
              and contribute to open-source projects.
            </p>
          </div>
        </div>
        <LogoSlider />
        <Expertise />
        <ReadingList />
      </div>
    </section>
  );
};

export default About;
