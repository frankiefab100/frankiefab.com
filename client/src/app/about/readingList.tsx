"use client";
import React, { useState } from "react";
import { BOOK_ITEMS } from "@/constants/readinglist";

export const ReadingList: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-8">
      <div className="text-left mb-4">
        <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white tracking-tight lg:text-3xl md:text-2xl text-lg">
          What I&apos;m Reading
        </h2>
        <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
          A curated selection of books on personal development, design,
          programming, AI, business, and more.
        </p>
      </div>

      <div className="flex space-x-1 rounded-xl bg-[#fafafa] dark:bg-[#141414] p-1">
        {BOOK_ITEMS.map((tab, index) => (
          <button
            key={tab.category}
            onClick={() => setActiveTab(index)}
            className={`flex items-center justify-center w-full rounded-lg py-2.5 text-sm lg:text-base font-medium leading-5 text-gray-600dark:text-gray-100
              ${
                activeTab === index
                  ? "bg-[#fff] dark:bg-[#222] shadow"
                  : "text-gray-600 dark:text-gray-100 hover:bg-[#f4f4f5] dark:hover:bg-[#252525] hover:text-gray-700 dark:hover:text-white"
              }`}
            aria-selected={activeTab === index}
            role="tab"
          >
            <tab.icon size={14} />
            <span className="ml-2 hidden md:block font-medium">
              {tab.category}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-2">
        {BOOK_ITEMS.map((tab, idx) => (
          <div
            key={idx}
            className={`rounded-xl bg-gradient-to-r from-[#f8f9ff] to-[#f4f4f5] dark:bg-gradient-to-r dark:from-[#141414] dark:to-[#1e1e1e] shadow-custom p-2 ${
              activeTab === idx ? "block" : "hidden"
            }`}
            role="tabpanel"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2">
              {tab.items.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-md p-3 bg-white hover:bg-[#f4f4f5] text-gray-600 dark:bg-[#141414] dark:hover:bg-[#222] dark:text-white backdrop-blur-sm transition-colors duration-200 "
                >
                  <p className="text-sm md:text-base font-normal leading-5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
