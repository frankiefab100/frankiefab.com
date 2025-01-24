"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Folder } from "lucide-react";
import { getGithubRepos } from "../../../lib/getGithubRepos";
import { RepoType } from "../../../lib/types";
import { FetchOptions } from "../../../lib/types";
import Loading from "@/app/loading";

export const RepoCarousel: React.FC<FetchOptions> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
      }
    },
    [isAnimating]
  );

  const goToPrevious = useCallback(() => {
    if (!isAnimating) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? repos.length - 1 : currentIndex - 1;
      goToSlide(newIndex);
    }
  }, [currentIndex, isAnimating, goToSlide, repos.length]);

  const goToNext = useCallback(() => {
    if (!isAnimating) {
      const isLastSlide = currentIndex === repos.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      goToSlide(newIndex);
    }
  }, [currentIndex, isAnimating, goToSlide, repos.length]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setIsLoading(true);
        const fetchedRepos = await getGithubRepos({
          username: "frankiefab100",
          count: 10,
          minStars: 2,
          random: true,
        });
        setRepos(fetchedRepos);
      } catch (err) {
        setError("Failed to fetch repositories");
      } finally {
        setIsLoading(false);
      }
    };

    loadRepos();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (isLoading) return <Loading />;
  if (error)
    return <div className="text-red-500 text-center py-24">Error: {error}</div>;

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto">
        <div>
          <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-center my-8 tracking-tight lg:text-4xl md:text-3xl text-2xl">
            Some {""}
            <span className="text-cyan-600">Open Source</span>
            {""} Works
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="my-4 flex justify-end gap-4 pr-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full shadow bg-white hover:bg-[#f4f5f8] dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-600 dark:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full shadow bg-white hover:bg-[#f4f5f8] dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-600 dark:text-white transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="w-full flex-shrink-0 md:pr-6 md:w-1/2 lg:w-1/3"
              >
                <div className="backdrop-blur-sm rounded-lg overflow-hidden border border-gray-200 bg-[#fafafa] hover:bg-[#f4f4f4] dark:border-gray-800  dark:bg-black/50  hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-[400px] flex flex-col">
                  <div className="p-8">
                    <Folder className="w-6 h-6" text-gray-800 />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2 truncate">
                      {repo.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400 text-base mb-6 line-clamp-3">
                      {repo.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-full border transition-all duration-300 border-gray-200 dark:border-gray-800  hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-white"
                      >
                        View project
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                      </a>
                      <span className="text-gray-400">⭐ {repo.stars}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {repos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan-500 w-4" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
