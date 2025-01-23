import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "../../../lib/getAllProjects";
import { ArrowRight } from "lucide-react";

// import type { Viewport } from "next";

// export function generateViewport(): Viewport {
//   return {
//     themeColor: "black",
//   };
// }

export default async function ProjectsPage() {
  const { data: projects } = await getAllProjects();

  // const imageUrl = getStrapiMedia(projects.coverImage?.url);
  // console.log("imageurl", imageUrl);

  return (
    <section id="projects">
      <div className="py-24 max-w-7xl mx-auto lg:px-16 px-6">
        {/* <div className="bg-black py-24 sm:py-16 lg:py-24 px-14 md:px-24 lg:px-40"> */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Project {""}
            <span className="text-cyan-600">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
            Selected projects I have worked on
          </p>
        </div>

        {projects && (
          // lg:flex grid grid-cols-[1fr_1fr] mt-4
          <div className="grid gap-y-4 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: any) => (
              // <div className="my-6 rounded-2xl p-2 sm:py-4 sm:px-4 backdrop-blur-[6px] backdrop-saturate-[180%] bg-[rgba(17,25,40,0.75)] border border-[rgba(255,255,255,0.125)]">

              <div
                key={project.id}
                className="sm:my-6 sm:mx-4 p-2 sm:p-4 bg-[#f7f9ff] dark:bg-[#15171d] shadow-[0_2px_2px_0_rgba(7, 10, 45, 0.37)] backdrop-blur-[2.5px] rounded-[10px] border border-gray-200 dark:border-gray-800"
              >
                <div className="rounded-md bg-gradient-to-t from-[rgb(65,176,198)] to-[#61c1f0] p-1 shadow-xl">
                  <Link href={`/projects/${project.slug || ""}`}>
                    {/* {project.coverImage && (
                    <Image
                      src={
                        project.coverImage?.url ||
                        project.coverImage?.formats?.medium?.url
                      }
                      alt={project.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  )} */}

                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl || project.coverImage?.url}
                        alt={project.title}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </Link>
                </div>

                <div className="my-4 grid grid-cols-[1fr] lg:gap-4 ">
                  <p className="text-base leading-7 dark:text-gray-200 text-gray-700">
                    {project.description || "No description available"}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-3 md:mt-0 inline-flex items-center text-sm md:text-base font-medium  text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500 transition-colors"
                  >
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="https://github.com/frankiefab100?tab=repositories"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500"
          >
            See more projects
            <ArrowRight className="ml-1 h-4 w-4" />
            <span className="sr-only">Right Arrow</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import Image from "next/image";
// import { getAllProjects } from "../../../lib/getAllProjects";
// import { ArrowRight } from "lucide-react";

// export default async function ProjectsPage() {
//   const { data: projects, error } = await getAllProjects();

//   if (error) {
//     return <div className="text-center py-24">Error: {error}</div>;
//   }

//   return (
//     <section>
//       <div className="py-24 max-w-7xl mx-auto lg:px-16 px-8">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="font-bold text-[#131313] dark:text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
//             Project <span className="text-cyan-600">Gallery</span>
//           </h2>
//           <p className="text-lg font-normal text-gray-700 dark:text-gray-400">
//             Selected projects I have worked on
//           </p>
//         </div>

//         {projects && projects.length > 0 ? (
//           <div className="grid gap-y-4 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project: any) => (
//               <div
//                 key={project.id}
//                 className="sm:my-6 sm:mx-4 p-2 sm:p-4 bg-[#f7f9ff] dark:bg-[rgba(18,1,73,0.15)] shadow-[0_2px_2px_0_rgba(7, 10, 45, 0.37)] backdrop-blur-[2.5px] rounded-[10px] border border-gray-200 dark:border-gray-800"
//               >
//                 <div className="rounded-md bg-gradient-to-t from-[rgb(65,176,198)] to-[#61c1f0] p-1 shadow-xl">
//                   <Link href={`/projects/${project.attributes.slug || ""}`}>
//                     {project.attributes.coverImage?.data?.attributes?.url && (
//                       <Image
//                         src={
//                           project.attributes.coverImage.data.attributes.url ||
//                           "/placeholder.svg"
//                         }
//                         alt={project.attributes.title}
//                         width={400}
//                         height={300}
//                         className="w-full h-[200px] object-cover rounded-md"
//                       />
//                     )}
//                   </Link>
//                 </div>

//                 <div className="my-4 grid grid-cols-[1fr] lg:gap-4 ">
//                   <h3 className="text-xl font-semibold mb-2">
//                     {project.attributes.title}
//                   </h3>
//                   <p className="text-base leading-7 dark:text-gray-200 text-gray-700">
//                     {project.attributes.description ||
//                       "No description available"}
//                   </p>

//                   <Link
//                     href={`/projects/${project.attributes.slug}`}
//                     className="mt-3 md:mt-0 inline-flex items-center text-sm md:text-base font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500 transition-colors"
//                   >
//                     View details
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">No projects found.</div>
//         )}

//         <div className="mt-16 text-center">
//           <Link
//             href="https://github.com/frankiefab100?tab=repositories"
//             aria-label="See more projects on GitHub"
//             className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-500"
//           >
//             See more projects
//             <ArrowRight className="ml-1 h-4 w-4" />
//             <span className="sr-only">Right Arrow</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
