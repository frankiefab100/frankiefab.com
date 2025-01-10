// "use client";

// import { Code2, BookOpen, Users } from "lucide-react";

// const services = [
//   {
//     icon: Code2,
//     title: "Practice everything in popular frameworks",
//     description:
//       "200+ of the most important questions — from building user interfaces in popular front end frameworks to system design.",
//   },
//   {
//     icon: BookOpen,
//     title: "Learn from official solutions and guides",
//     description:
//       "Every question is accompanied by an official, well-explained solution from ex-interviewers.",
//   },
//   {
//     icon: Users,
//     title: "Guided by well-known senior engineers",
//     description:
//       "Including core maintainers at popular open source projects and creators of Blind 75 and Front End Interview Handbook.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="w-full bg-black text-white py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {services.map((service, index) => (
//             <div key={index} className="flex flex-col items-start">
//               <div className="rounded-full bg-neutral-800 p-4 mb-6">
//                 <service.icon className="w-6 h-6" />
//               </div>
//               <h2 className="text-2xl font-semibold mb-4 leading-tight">
//                 {service.title}
//               </h2>
//               <p className="text-neutral-400 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { Code2, BookOpen, Users } from "lucide-react";

// const services = [
//   {
//     icon: Code2,
//     title: "Practice everything in popular frameworks",
//     description:
//       "200+ of the most important questions — from building user interfaces in popular front end frameworks to system design.",
//   },
//   {
//     icon: BookOpen,
//     title: "Learn from official solutions and guides",
//     description:
//       "Every question is accompanied by an official, well-explained solution from ex-interviewers.",
//   },
//   {
//     icon: Users,
//     title: "Guided by well-known senior engineers",
//     description:
//       "Including core maintainers at popular open source projects and creators of Blind 75 and Front End Interview Handbook.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="w-full bg-background text-foreground py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {services.map((service, index) => (
//             <div key={index} className="flex flex-col items-start">
//               <div className="rounded-full bg-muted p-4 mb-6">
//                 <service.icon className="w-6 h-6" />
//               </div>
//               <h2 className="text-2xl font-semibold mb-4 leading-tight">
//                 {service.title}
//               </h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Code2, Palette, ScrollText } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "I specialize in developing user-friendly web applications with modern frameworks like React, delivering high-quality code that meets design specifications.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    description:
      "I create distinctive social media and marketing materials, that align with your brand story and values, ensuring you stand out in a competitive market.",
  },
  {
    icon: ScrollText,
    title: "Technical Writing",
    description:
      "I simplify complex instructional materials, write blog posts, and how-to guides that enhance users' understanding and experience with your products or services.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8">
      <h2 className="font-bold text-[#131313] dark:text-white text-center my-8 tracking-tight lg:text-4xl text-3xl">
        What I {""}
        <span className="text-cyan-600">Do</span>
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start space-y-3 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex justify-center items-center sm:block">
                <div className="w-[60px] mr-3 rounded-2xl bg-gray-800/50 p-5 ring-1 ring-gray-700/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-gray-800/70 group-hover:ring-gray-600/70">
                  <service.icon className="h-5 w-5 text-gray-200 dark:text-gray-400 transition-colors duration-300 hover:text-gray-100 hover:dark:text-gray-300" />
                </div>
                {/* <div className="space-y-4"> */}
                <h3 className="font-Bitform mt-2 text-left text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
                  {service.title}
                </h3>
              </div>
              <p className="text-left text-base leading-7 text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
