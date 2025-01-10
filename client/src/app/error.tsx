"use client";

import { RefreshCcw, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  const handleTryAgain = async () => {
    router.back();
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen bg-gradient-to-b  flex items-center justify-center p-4">
      <div className="bg-gradient-to-r from-[#fbfeff] to-[#f3f3f3] dark:from-[#051131] dark:to-[#00001f] max-w-md w-full rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="h-16 w-16 text-amber-500" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Something went wrong!
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          An error occurred while loading this page. Please try again.
        </p>

        <button
          onClick={handleTryAgain}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <RefreshCcw className="h-5 w-5" />
          Try again
        </button>
      </div>
    </div>
  );
}
