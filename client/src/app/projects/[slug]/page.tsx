import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Link2 } from "lucide-react";
import { ProjectData } from "../../../../types/types";
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

        {project.headerImage?.formats?.large?.url && (
          <Image
            src={project.headerImage.formats.large.url}
            className="rounded-lg shadow-lg mb-8"
            alt={
              project.headerImage.alternativeText ||
              project.title ||
              "Project header image"
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
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.overview),
              }}
            />
          </div>
        )}

        {project.technologies && (
          <div className="mb-8">
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.technologies),
              }}
            />
          </div>
        )}

        {project.ideationImage?.formats?.medium?.url && (
          <Image
            src={project.ideationImage.formats.medium.url}
            className="rounded-lg shadow-lg mb-8"
            alt={
              project.ideationImage.alternativeText ||
              project.title ||
              "Project ideation image"
            }
            width={1200}
            height={600}
          />
        )}

        {project.keyFeatures && (
          <div className="mb-8">
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
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.challengesAndProcess),
              }}
            />
          </div>
        )}

        <div className="mb-8">
          {project.otherImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.otherImages.map((image, index) => (
                <Image
                  key={index}
                  src={image.formats.large.url ?? image.formats.medium.url}
                  alt={`image ${index + 1}`}
                  className="rounded-lg w-full h-auto"
                  width={600}
                  height={400}
                />
              ))}
            </div>
          )}
        </div>

        {project.achievementsAndSolution && (
          <div className="mb-8">
            <div
              className="text-base sm:text-lg text-gray-700 dark:text-gray-400"
              dangerouslySetInnerHTML={{
                __html: renderBlocks(project.achievementsAndSolution),
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function renderBlocks(blocks: any[]): string {
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const content = block.children
          .map((child: any) => {
            // Handle link type first
            if (child.type === "link") {
              const linkText = child.children?.[0]?.text || child.url;
              return `<a href="${child.url}" class="text-blue-500 hover:text-blue-700 underline">${linkText}</a>`;
            }

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
            if (child.code) {
              text = `<code class="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm">${text}</code>`;
            }
            if (child.strikethrough) {
              text = `<del>${text}</del>`;
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
          ? `<ol class="list-decimal mb-2 pl-4">${listItems}</ol>`
          : `<ul class="list-disc mb-2 pl-4">${listItems}</ul>`;
      }

      if (block.type === "heading") {
        const level = block.level;
        const content = block.children.map((child: any) => child.text).join("");
        const headingClasses: { [key: number]: string } = {
          1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
          2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold",
          3: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold",
          4: "text-base sm:text-lg md:text-xl lg:text-2xl font-medium",
          5: "text-sm sm:text-base md:text-lg lg:text-xl font-medium",
          6: "text-xs sm:text-sm md:text-base lg:text-lg font-medium",
        };

        return `<h${level} class="font-CooperHewittMedium mb-1 text-[#131313] dark:text-white ${
          headingClasses[level] || headingClasses[6]
        }">${content}</h${level}>`;
      }

      if (block.type === "quote") {
        const content = block.children.map((child: any) => child.text).join("");
        return `<blockquote class="border-l-4 border-gray-300 pl-4 italic mb-2">${content}</blockquote>`;
      }

      return "";
    })
    .join("");
}
