// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { fetchProjects } from "../../../lib/api";

// const ProjectCard = ({ projectList }) => {
//   return (
//     <>
//       {/* Card 1 */}
//       <div className="mt-16 mb-10 rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">

//             <div className="flex-1 space-y-8 mb-12 lg:mb-0">
//               <p className="text-lg leading-7 text-gray-700 max-w-3xl">
//                 Designed and built responsive glassmorphic weather forecast
//                 application using the OpenWeather API
//               </p>

//               <Link
//                 href="/remove"
//                 className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
//               >
//                 View details
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>

//             <div className="flex-1 relative">
//               <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
//                 <Link href="#">
//                   <Image
//                     src="/placeholder.png"
//                     alt="Project cover photo"
//                     width={800}
//                     height={600}
//                     className="rounded-2xl w-full"
//                     priority
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div className="rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
//             <div className="flex-1 relative mb-12 lg:mb-0">
//               <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
//                 <Link href="#">
//                   <Image
//                     src="/placeholder.png"
//                     alt="Project cover photo"
//                     width={800}
//                     height={600}
//                     className="rounded-2xl w-full"
//                     priority
//                   />
//                 </Link>
//               </div>
//             </div>

//             <div className="flex-1 space-y-8">
//               <p className="text-lg leading-7 text-gray-700 max-w-3xl">
//                 Developed an intuitive and mobile-responsive website for COMPANY
//                 NAME, a Saas platform tailed for developer and project managers.
//               </p>

//               <Link
//                 href="#"
//                 className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
//               >
//                 View details
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Card 3 & 4 */}
//       <div className="pt-10 grid gap-x-8 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         <Link href="/removdesign">
//           <Image
//             src="/placeholder.png"
//             alt="Project cover photo"
//             width={800}
//             height={600}
//             className="rounded-2xl w-full"
//             priority
//           />
//         </Link>

//         <Link href="#">
//           <Image
//             src="/placeholder.png"
//             alt="Project cover photo"
//             width={800}
//             height={600}
//             className="rounded-2xl w-full"
//             priority
//           />
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ProjectCard;

// export async function getStaticProps() {
//   const projectList = await fetchProjects("projects");
//   return {
//     props: { projectList },
//     revalidate: 1,
//   };
// }

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { ProjectCardProps } from "../../../lib/types";

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, cardStyle }) => {
//   switch (cardStyle) {
//     case "card1":
//       return renderCard1(project);
//     case "card2":
//       return renderCard2(project);
//     // case "card3":
//     //   return renderCard3(project);
//     default:
//       return renderCard1(project);
//   }
// };

// const renderCard1 = (project) => (
//   <div className="mt-16 mb-10 rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
//         <div className="flex-1 space-y-8 mb-12 lg:mb-0">
//           <p className="text-lg sm:text-xl leading-7 text-gray-700 max-w-3xl">
//             {/* Designed and built responsive glassmorphic weather forecast
//             application using the OpenWeather API */}
//             {project.description}
//           </p>

//           <Link
//             href={`/projects/${project.slug}`}
//             className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
//           >
//             View details
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>

//         <div className="flex-1 relative">
//           <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
//             <Link href={`/projects/${project.slug}`}>
//               <img
//                 src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.coverImage?.url}`}
//                 alt={project.coverImage.alternativeText || project.name}
//                 width={800}
//                 height={600}
//                 className="rounded-2xl w-full"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const renderCard2 = (project) => (
//   <div className="rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
//         <div className="flex-1 relative mb-12 lg:mb-0">
//           <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
//             <Link href={`/projects/${project.slug}`}>
//               <img
//                 src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.coverImage?.slug}`}
//                 alt={project.coverImage.alternativeText || project.name}
//                 width={800}
//                 height={600}
//                 className="rounded-2xl w-full"
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="flex-1 space-y-8">
//           <p className="text-lg sm:text-xl leading-7 text-gray-700 max-w-3xl">
//             {/* Developed an intuitive and mobile-responsive website for COMPANY
//             NAME, a Saas platform tailed for developer and project managers. */}
//             {project.description}
//           </p>

//           <Link
//             href={`/projects/${project.slug}`}
//             className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
//           >
//             View details
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // const renderCard3 = (project) => (
// //   <Link
// //     href={`/projects/${project.slug}`}
// //     className="pt-10 grid gap-x-8 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
// //   >
// //     <img
// //       src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.cover?.slug}`}
// //       alt={project.title}
// //       width={800}
// //       height={600}
// //       className="rounded-2xl w-full"
// //     />
// //     <img
// //       src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${project.cover?.slug}`}
// //       alt={project.title}
// //       width={800}
// //       height={600}
// //       className="rounded-2xl w-full"
// //     />
// //   </Link>
// // );

// export default ProjectCard;

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { ProjectCardProps } from "../../../lib/types";

// interface Project {
//   id: string;
//   documentId: string;
//   slug: string;
//   description: string;
//   coverImage: {
//     url: string;
//     alternativeText: string;
//   };
//   title: string;
// }

// const getImageSrc = (project: Project): string => {
//   if (project.coverImage && project.coverImage.url) {
//     return `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.coverImage.url}`;
//   }
//   return "/placeholder.png"; // Ensure this path exists in your public folder
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, cardStyle }) => {
//   if (!project) return null;

//   switch (cardStyle) {
//     case "card1":
//       return renderCard1(project);
//     case "card2":
//       return renderCard2(project);
//     default:
//       return renderCard1(project);
//   }
// };

// const renderCard1 = (project: Project) => (
//   <div className="mt-16 mb-10 rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
//         <div className="flex-1 space-y-8 mb-12 lg:mb-0">
//           <p className="text-lg sm:text-xl leading-7 text-gray-700 max-w-3xl">
//             {project.description || "No description available"}
//           </p>

//           <Link
//             href={`/projects/${project.slug || ""}`}
//             className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
//           >
//             View details
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>

//         <div className="flex-1 relative">
//           <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
//             <Link href={`/projects/${project.slug || ""}`}>
//               <Image
//                 // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
//                 //   project.coverImage?.url || "/placeholder.jpg"
//                 // }`}
//                 src={getImageSrc(project)}
//                 alt={
//                   project.coverImage?.alternativeText ||
//                   project.title ||
//                   "Project image"
//                 }
//                 width={800}
//                 height={600}
//                 className="rounded-2xl w-full"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const renderCard2 = (project: Project) => (
//   <div className="rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
//         <div className="flex-1 relative mb-12 lg:mb-0">
//           <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
//             <Link href={`/projects/${project.slug || ""}`}>
//               <Image
//                 // src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
//                 //   project.coverImage?.url || "/placeholder.jpg"
//                 // }`}
//                 src={getImageSrc(project)}
//                 alt={
//                   project.coverImage?.alternativeText ||
//                   project.title ||
//                   "Project image"
//                 }
//                 width={800}
//                 height={600}
//                 className="rounded-2xl w-full"
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="flex-1 space-y-8">
//           <p className="text-lg sm:text-xl leading-7 text-gray-700 max-w-3xl">
//             {project.description || "No description available"}
//           </p>

//           <Link
//             href={`/projects/${project.slug || ""}`}
//             className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
//           >
//             View details
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default ProjectCard;

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "../../../lib/types";

interface Project {
  id: string;
  documentId: string;
  slug: string;
  description: string;
  coverImage?: {
    url: string;
    alternativeText: string;
  };
  title: string;
}

const getImageSrc = (project: Project): string => {
  if (project.coverImage && project.coverImage.url) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.coverImage.url}`;
  }
  return "/placeholder.jpg"; // Ensure this path exists in your public folder
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) return null;

  return (
    <div className="rounded-2xl bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
          <div className="flex-1 relative mb-12 lg:mb-0">
            <div className="rounded-3xl bg-cyan-500 p-4 shadow-xl">
              <Link href={`/projects/${project.slug || ""}`}>
                <Image
                  src={getImageSrc(project)}
                  alt={project.title || "Project image"}
                  width={800}
                  height={600}
                  className="rounded-2xl w-full"
                />
              </Link>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <p className="text-lg sm:text-xl leading-7 text-gray-700 max-w-3xl">
              {project.description || "No description available"}
            </p>

            <Link
              href={`/projects/${project.slug || ""}`}
              className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              View details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
