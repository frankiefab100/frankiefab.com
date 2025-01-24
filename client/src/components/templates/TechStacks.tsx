"use client";

import React, { useState } from "react";
import { TooltipProps } from "../../../lib/types";
import { tools } from "@/constants/techstacks";

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
    <div className="py-16 md:py-24 flex flex-col items-center justify-center md:px-10">
      <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-center md:my-8 my-3 tracking-tight lg:text-4xl text-3xl">
        Core {""}
        <span className="text-cyan-600">Technologies</span>
      </h2>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-4 justify-center items-center text-center">
        {tools.map((tool) => (
          <Tooltip key={tool.name} content={tool.name}>
            <div className="shadow bg-[#fff] dark:bg-[#1c1f2e] rounded-full md:p-4 md:w-16 md:h-16 p-3 w-12 h-12 flex items-center justify-center cursor-pointer">
              <tool.icon
                // width={20}
                // height={20}
                size={40}
                color={tool.color}
                aria-hidden="true"
              />
              <span className="sr-only">{tool.name}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
