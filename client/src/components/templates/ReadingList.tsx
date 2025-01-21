"use client";

import React, { useState } from "react";
import { bookItems } from "@/constants/readinglist";

const ReadingList = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-8 pb-16 max-w-7xl mx-auto md:px-16 px-6">
      {/* <div className="w-full py-16 px-14 md:px-24 lg:px-34"> */}
      <h2 className="font-bold text-white text-left mb-4 tracking-tight md:text-3xl text-2xl">
        What I&apos;m {""}
        <span className="text-cyan-600">Reading</span>
      </h2>
      <p className="mb-6 text-left text-base sm:text-lg font-normal leading-7 text-zinc-400">
        Some great books in my reading list. I recommend you them check out
      </p>

      <div className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {bookItems.map((tab, index) => (
          <button
            key={tab.category}
            onClick={() => setActiveTab(index)}
            className={`flex items-center justify-center w-full rounded-lg py-2.5 text-sm sm:text-base font-medium leading-5 text-gray-100
              ${
                activeTab === index
                  ? "bg-blue-600/30 shadow"
                  : "text-gray-100 hover:bg-blue-300/[0.12] hover:text-white"
              }`}
            aria-selected={activeTab === index}
            role="tab"
          >
            <tab.icon size={14} />
            <span className="ml-2">{tab.category}</span>
          </button>
        ))}
      </div>
      <div className="mt-2">
        {bookItems.map((tab, idx) => (
          <div
            key={idx}
            className={`rounded-xl bg-gradient-to-r from-[#0a2227] to-[#00012e] shadow-2xl p-2 ${
              activeTab === idx ? "block" : "hidden"
            }`}
            role="tabpanel"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tab.items.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-md p-3 bg-white/10 hover:bg-white/25 text-white backdrop-blur-sm transition-colors duration-200 "
                >
                  <h3 className="text-base font-medium leading-5">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingList;
