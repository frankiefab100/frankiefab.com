import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Link2 } from "lucide-react";
import { ProjectData } from "../../../../lib/types";
import { getProjectBySlug } from "../../../../lib/getProjectBySlug";
import { marked } from "marked";

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
    <div className="min-h-screen md:py-24 py-16 lg:py-24 max-w-7xl mx-auto lg:px-16 px-6">
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

        {project.overview && (
          <div className="mb-8">
            <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
              Project Overview
            </h2>
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.overview),
              }}
            />
          </div>
        )}

        {project.techUse && (
          <div className="mb-8">
            <h2 className="font-CooperHewittMedium lg:text-3xl md:text-2xl text-xl">
              Technologies
            </h2>
            <ul className="text-base sm:text-lg text-gray-700 dark:text-gray-400">
              {project.techUse.map((techUse, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">
                    {techUse.name}: {""}
                  </span>
                  {techUse.useCase}
                </li>
              ))}
            </ul>
          </div>
        )}

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

// function renderBlocks(blocks: any[]): string {
//   return blocks
//     .map((block) => {
//       if (block.type === "paragraph") {
//         return `<p style="margin-bottom: 10px;">${block.children
//           .map((child: any) => child.text)
//           .join("")}</p>`;
//       }
//       return "";
//     })
//     .join("");
// }

function renderBlocks(blocks: any[]): string {
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const content = block.children
          .map((child: any) => {
            let text = child.text;

            // Apply text formatting
            if (child.bold) {
              text = `<strong>${text}</strong>`;
            }
            if (child.italic) {
              text = `<em>${text}</em>`;
            }
            if (child.underline) {
              text = `<u>${text}</u>`;
            }
            if (child.type === "inlinecode") {
              text = `<code>${text.inline || child.code}</code>`;
            }
            if (child.strikethrough) {
              text = `<del>${text}</del>`;
            }
            if (child.type === "link" || child.link) {
              return `<a href="${
                child.url
              }" class="text-blue-500 hover:text-blue-700 underline">${
                child.text || child.link
              }</a>`;
            }
            return text;
          })
          .join("");

        return `<p class="mb-4">${content}</p>`;
      }

      if (block.type === "list") {
        const listItems = block.children
          .map((item: any) => {
            const itemContent = item.children
              .map((child: any) => child.text)
              .join("");
            return `<li class="ml-4">${itemContent}</li>`;
          })
          .join("");

        return block.format === "ordered"
          ? `<ol class="list-decimal mb-4 pl-4">${listItems}</ol>`
          : `<ul class="list-disc mb-4 pl-4">${listItems}</ul>`;
      }

      if (block.type === "heading") {
        const level = block.level;
        const content = block.children.map((child: any) => child.text).join("");
        return `<h${level} class="text-2xl font-bold mb-4">${content}</h${level}>`;
      }

      if (block.type === "quote") {
        const content = block.children.map((child: any) => child.text).join("");
        return `<blockquote class="border-l-4 border-gray-300 pl-4 italic mb-4">${content}</blockquote>`;
      }

      return "";
    })
    .join("");
}
