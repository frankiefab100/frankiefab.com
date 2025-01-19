"use client";

import React, { useState } from "react";
import {
  BookIcon,
  // BookType,
  FlameIcon,
  TrendingUp,
} from "lucide-react";
import { TabItem } from "../../../lib/types";

const tabItems: TabItem[] = [
  {
    category: "Self Development",
    icon: <BookIcon className="w-4 h-4" />,
    items: [
      "The Subtle Art of Not Giving a F*ck - Mark Manson",
      "Atomic Habits - James Clear",
      "Mastery - Robert Greene",
      "The Alchemist - Paulo Coelho",
      "Deep Work - Cal Newport",
      "Think and Grow Rich - Napoleon Hill",
      "The 7 Habits of Highly Effective People - Stephen Covey",
      "The Courage to Be Disliked - Ichiro Kishimi & F. Koga",
      "Think Like a Monk - Jay Shetty",
      "Give and Take - Adam Grant",
      "Quit - Daniel Kahneman",
      "No Excuses - Brian Tracy",
      "How To Win Friends and Influence People - Dale Carnegie",
      "The Enemy Called Average - John Mason",
      "Keep Going - Austin Kleon",
      "Building a Second Brain - Tiago Forte",
      "Ikigai - Hector Garcia & Francesc Miralles",
      "Side Hustle Bible - James Altucher",
      "The Charisma Myth - Olivia Fox Cabane",
      "46 rules of Genius - Marty Neumeier",
    ],
  },
  {
    category: "Design & Tech",
    icon: <FlameIcon className="w-4 h-4" />,
    items: [
      "The Design of Everyday Things - Donald Norman",
      "Don't Make Me Think - Steve Krug",
      "The Laws of UX - Jon Yablonski",
      "Refactoring UI - Adam Wathan & Steven Schoger",
      "Atomic Design - Brad Frost",
      "Hooked - Nir Eyal & Ryan Hoover",
      "Design is a job - Mike Monteiro",
      "The UX Book - Rex Hartson & Pardha S. Pyla",
      "Designing Brand Identity - Alina Wheeler",
      "Identity Designed - David Airey",
      "The Art of Noticing - Rob Walker",
      "Content Everywhere - Sara Wachter-Boettcher",
      "Clean Architecture - Robert C. Martin",
      "Clean Code - Robert C. Martin",
      "Grokking Algorithms - Aditya Y. Bhargava",
      "Cracking the Coding Interview",
      "You Don't Know JS - Kyle Simpson",
      "Nicely Said - Nicole Fenton & Kate Kiefer Lee",
      "Scary Smart: The future of AI and how you can save the world - Mo Gawdat",
      "Release It: Design and Deploy Production-Ready Software - Michael T. Nygard",
      "The Coming Wave - Mustafa Suleyman",
      "Life After Google - George Gilder",
      "The Business Value of Developer Relations - Mary Thengvall",
      "Community Building on the Web - Amy Jo Kim",
    ],
  },
  {
    category: "Others",
    icon: <TrendingUp className="w-4 h-4" />,
    items: [
      "Zero to One - Peter Thiel",
      "48 Laws of Power - Robert Greene",
      "Rework - Jason Fried",
      "Never Split the Difference - Chris Voss & Tahl Raz",
      "Rich Dad Poor Dad - Robert Kiyosaki",
      "The Monk Who Sold His Ferrari - Robin Sharma",
      "The Psychology of Money - Morgan Housel",
      "The Bottom Billion - Paul Collier",
      "The Missing Crypto Queen - Jamie Bartlett",
      "The Cryptopians - Laura Shin",
      "Outlive: The Science and Art of Longevity - Peter Attia",
      "Influence: The Psychology of Persuasion - Robert B. Cialdini",
      "The Richest Man in Babylon - George S. Clason",
      "There was a country - Chinua Achebe",
      "Range: Why generalists triumph in a specialized world - David Epstein ",
      "It didn't start with you - Mark Wolynn",
      "The Art of Explanation - Lee Lefever",
      "The Anti-Social Network - Ben Mezrich",
      "Your Money or Your Life - Vicki Robin and Joe Dominguez",
      "Einstein: His Life and Universe - Walter Isaacso",
    ],
  },
];

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
        {tabItems.map((tab, index) => (
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
            {tab.icon}
            <span className="ml-2">{tab.category}</span>
          </button>
        ))}
      </div>
      <div className="mt-2">
        {tabItems.map((tab, idx) => (
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
