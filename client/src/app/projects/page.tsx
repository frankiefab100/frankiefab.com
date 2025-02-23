import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "../../../lib/getAllProjects";
import { ChevronRight } from "lucide-react";
import React from "react";

const ProjectsPage = async () => {
  const { data: projects } = await getAllProjects();

  return (
    <section id="projects">
      <div className="py-24 max-w-7xl mx-auto lg:px-16 px-6">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-[#131313] dark:text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Project {""}
            <span className="text-cyan-600">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
            A showcase of my most impactful projects, demonstrating my skills
            and expertise.
          </p>
        </div>

        {projects && (
          <div className="grid gap-y-4 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: any) => (
              <div
                key={project.id}
                className="sm:my-6 sm:mx-4 p-2 sm:p-4 bg-[#f7f9ff] dark:bg-[#15171d] shadow-[0_2px_2px_0_rgba(7, 10, 45, 0.37)] backdrop-blur-[2.5px] rounded-[10px] border border-gray-200 dark:border-gray-800"
              >
                <div className="rounded-md p-1 shadow-xl">
                  <Link href={`/projects/${project.slug || ""}`}>
                    {project.coverImage && (
                      <Image
                        src={
                          project.coverImage?.formats?.medium?.url ||
                          project.coverImage?.url
                        }
                        alt={
                          project.coverImage.alternativeText || project.title
                        }
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </Link>
                </div>

                <div className="my-4 grid grid-cols-[1fr] lg:gap-4 ">
                  <p className="text-base leading-6 dark:text-gray-200 text-gray-700">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-3 md:mt-0 inline-flex items-center text-sm md:text-base font-medium  text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500 transition-colors"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="https://github.com/frankiefab100?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See projects on GitHub"
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500"
          >
            See More Projects
            <ChevronRight className="ml-1 h-4 w-4" />
            <span className="sr-only">Right Arrow</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
