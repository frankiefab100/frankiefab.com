"use client";

import React, { useState } from "react";
import { TooltipProps } from "../../../types/types";
import { TECH_TOOLS } from "@/constants/techstacks";
import Link from "next/link";

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
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-800 dark:text-gray-800 dark:bg-gray-200 rounded-md shadow-sm bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          {content}
          <div className="absolute w-2 h-2 bg-gray-800 dark:bg-gray-200 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1"></div>
        </div>
      )}
    </div>
  );
};

export const TechStacks: React.FC = () => {
  return (
    <div className="py-16 md:py-24 flex flex-col items-center justify-center md:px-10">
      <div className="text-center md:my-8 my-3">
        <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white tracking-tight lg:text-4xl text-3xl">
          Core {""}
          <span className="text-cyan-600">Technologies</span>
        </h2>
        <p className="mb-1 text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
          Favorite tools that help me bring ideas to life. See my {""}
          <Link
            href="https://stackshare.io/frankiefab"
            className="text-base sm:text-lg italic hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stackshare
          </Link>{" "}
          for more.
        </p>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-10 gap-4 justify-center items-center text-center">
        {TECH_TOOLS.map((tool) => (
          <Tooltip key={tool.name} content={tool.name}>
            <div className="text-4xl bg-[#fff] dark:bg-[#15171d] shadow-[0_2px_2px_0_rgba(7, 10, 45, 0.37)] backdrop-blur-[2.5px] border border-gray-200 dark:border-gray-800 rounded-full md:p-4 md:w-16 md:h-16 p-3 w-12 h-12 flex items-center justify-center cursor-pointer">
              <tool.icon size={40} aria-hidden="true" />
              <span className="sr-only">{tool.name}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
