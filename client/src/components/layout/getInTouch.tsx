"use client";

import { Mail, Send, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

export const GetInTouch: React.FC = () => {
  return (
    <div id="getintouch" className="w-full pb-16">
      <div className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#f1f1f1] to-[#f4f4f4] dark:bg-gradient-to-r dark:from-[#020817] dark:to-[#00001f] p-6 md:p-12 shadow-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:gap-8 gap-4">
          <div className="text-left space-y-1">
            <h2 className="font-CooperHewittMedium text-2xl md:text-3xl font-semibold text-[#131313] dark:text-white">
              Have Project Ideas?
            </h2>
            <p className="pb-3 md:text-base text-sm text-gray-600 dark:text-gray-400 leading-5 flex-wrap">
              Send a message and I&apos;ll get back to you
            </p>
            <Link
              href="https://cal.com/frankiefab/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <CalendarDays className="w-5 h-5 mr-2" />
              Schedule a call
            </Link>
          </div>

          <div className="flex flex-col md:gap-4 gap-3 w-full md:w-auto">
            <Link
              href="https://t.me/frankiefab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center md:px-6 md:py-4 px-4 py-3 rounded-xl border bg-[#fafafa] hover:bg-[#fdfdfd] dark:border-gray-800 text-gray-600 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white backdrop-blur-sm transition-colors duration-200 group w-full md:w-auto"
            >
              <Send className="md:w-6 md:h-6 w-4 h-4 mr-4" />
              <span className="font-medium">Telegram</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link
              href="mailto:ohaegbulamfrank@gmail.com"
              className="inline-flex items-center md:px-6 md:py-4 px-4 py-3 rounded-xl border bg-[#fafafa] hover:bg-[#fdfdfd] dark:border-gray-800 text-gray-600 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white backdrop-blur-sm transition-colors duration-200 group w-full md:w-auto"
            >
              <Mail className="md:w-6 md:h-6 w-4 h-4 mr-4" />
              <span className="font-medium">Email</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
