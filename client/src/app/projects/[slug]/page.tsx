import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Link2 } from "lucide-react";
import { ProjectData } from "../../../../lib/types";
import { getProjectBySlug } from "../../../../lib/getProjectBySlug";

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const response = await getProjectBySlug(params.slug);

  if (!response.data || response.data.length === 0) {
    notFound();
  }
  const project: ProjectData = response.data[0];

  return (
    <div className="min-h-screen py-24 sm:py-16 lg:py-24 max-w-7xl mx-auto lg:px-16 px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
          {project.title}
        </h1>

        {project.coverImage?.formats?.medium?.url && (
          <Image
            src={project.coverImage.formats.medium.url}
            className="rounded-lg shadow-lg mb-8"
            alt={
              project.coverImage.alternativeText ||
              project.title ||
              "Project cover image"
            }
            width={1200}
            height={600}
          />
        )}

        <div className="flex gap-4 mb-8 mt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
              <Link2 className="w-4 h-4 mr-2" />
              Live URL
            </a>
          )}
        </div>

        <div className="mb-8">
          <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
            Project Overview
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-400">
            <p>{project.overview || project.description}</p>
          </div>
        </div>

        <div className="my-8">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="mr-2 border-gray-600 bg-gray-800 text-gray-700 dark:text-gray-400 px-2 py-2 rounded text-sm text-center"
            >
              {tool.name}
            </span>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
            Core Technologies & Use
          </h2>
          <ul className="list-disc space-y-3 pl-5 text-base sm:text-lg font-normal leading-6 text-gray-700 dark:text-gray-400">
            {project.techUse.map((tech, index) => (
              <li className="flex items-center" key={index}>
                <a
                  href="https://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cyan-500 hover:text-cyan-600 transition-colors"
                >
                  <span>{tech.name}</span>
                </a>
                <span>{tech.useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.keyFeatures && (
          <div className="mb-8">
            <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
              Features
            </h2>
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.keyFeatures),
              }}
            />
          </div>
        )}

        {project.challengesAndProcess && (
          <div className="mb-8">
            <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
              Challenges and Process
            </h2>
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.challengesAndProcess),
              }}
            />
          </div>
        )}

        <div className="mb-8">
          <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
            Screenshots
          </h2>

          {project.screenshots && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot.formats.medium.url ?? "/placeholder.png"}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg w-full h-auto"
                  width={600}
                  height={400}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function renderBlocks(blocks: any[]): string {
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        return `<p style="margin-bottom: 10px;">${block.children
          .map((child: any) => child.text)
          .join("")}</p>`;
      }
      return "";
    })
    .join("");
}
