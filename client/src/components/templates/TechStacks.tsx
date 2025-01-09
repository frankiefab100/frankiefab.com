"use client";

import React, { useState } from "react";
import { TechToolsProps } from "../../../lib/types";
import { TooltipProps } from "../../../lib/types";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiNotion,
  SiAdobephotoshop,
  SiFigma,
  SiGraphql,
  SiFirebase,
  SiSupabase,
  SiMarkdown,
  SiNetlify,
  SiGitlab,
} from "react-icons/si";

const tools: TechToolsProps[] = [
  { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "SASS", icon: SiSass, color: "#E0234E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#8CC84B" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Notion", icon: SiNotion, color: "#F0F0F0" },
  { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Firebase", icon: SiFirebase, color: "#	#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3E4C59" },
  { name: "Markdown", icon: SiMarkdown, color: "#0f0f0f" },
  { name: "Netlify", icon: SiNetlify, color: "#00C48C" },
  { name: "GitLab", icon: SiGitlab, color: "#E24329" },
];

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1"></div>
        </div>
      )}
    </div>
  );
};

export default function TechStacks() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="font-bold text-white text-center my-8 tracking-tight lg:text-4xl text-3xl">
        Core {""}
        <span className="text-cyan-600">Technologies</span>
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-9 gap-4 justify-center items-center text-center">
        {tools.map((tool) => (
          <Tooltip key={tool.name} content={tool.name}>
            <div className="bg-[#1c1f2e] rounded-full p-4 w-16 h-16 flex items-center justify-center cursor-pointer">
              <tool.icon size={40} color={tool.color} aria-hidden="true" />
              <span className="sr-only">{tool.name}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
