"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Folder } from "lucide-react";
import { getGithubRepos } from "../../../lib/getGithubRepos";
import type { RepoType, FetchOptions } from "../../../lib/types";
import Loading from "@/app/loading";

export const RepoCarousel: React.FC<FetchOptions> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkBreakPoint = () => {
      const width = window.innerWidth;

      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkBreakPoint();
    window.addEventListener("resize", checkBreakPoint);
    return () => window.removeEventListener("resize", checkBreakPoint);
  }, []);

  const totalSlides = repos.length;
  const slidesToShow = isMobile ? 1 : isTablet ? 2.2 : 3.2;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(
        Math.max(
          0,
          Math.min(index, totalSlides - (isMobile ? 1 : isTablet ? 2.2 : 3.2))
        )
      );
    },
    [totalSlides, isMobile]
  );

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setIsLoading(true);
        const fetchedRepos = await getGithubRepos({
          username: "frankiefab100",
          count: 15,
          minStars: 2,
          random: false,
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
        <div className="text-center md:my-8 my-3">
          <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white tracking-tight lg:text-4xl md:text-3xl text-2xl">
            Some <span className="text-cyan-600">Open Source</span> Work
          </h2>
          <p className="mb-1 text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
            A selection of open source projects I&apos;ve built or contributed
            to.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="my-4 flex justify-end gap-4 pr-4">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full shadow bg-white hover:bg-[#f4f5f8] dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-600 dark:text-white transition-colors ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            disabled={
              currentIndex >=
              totalSlides - (isMobile ? 1 : isTablet ? 2.2 : 3.2)
            }
            className={`p-2 rounded-full shadow bg-white hover:bg-[#f4f5f8] dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-sm text-gray-600 dark:text-white transition-colors ${
              currentIndex >=
              totalSlides - (isMobile ? 1 : isTablet ? 2.2 : 3.2)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="w-full relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {repos.map((repo, index) => (
              <div
                key={repo.name}
                className={`${
                  isMobile ? "w-full" : isTablet ? "w-[45.45%]" : "w-[31.25%]"
                } flex-shrink-0 px-2`}
                style={{
                  opacity: isMobile
                    ? 1
                    : isTablet
                    ? index >= currentIndex && index < currentIndex + 3
                      ? 1
                      : 0.5
                    : index >= currentIndex && index < currentIndex + 4
                    ? 1
                    : 0.5,
                  transition: "opacity 0.5s ease-out",
                }}
              >
                <div className="backdrop-blur-sm rounded-lg overflow-hidden border border-gray-200 bg-[#fafafa] hover:bg-[#f4f4f4] dark:border-gray-800 dark:bg-black/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-[400px] flex flex-col">
                  <div className="p-8">
                    <Folder className="w-6 h-6 text-gray-800" />
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
                        className="inline-flex items-center px-6 py-3 rounded-full border transition-all duration-300 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-white"
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

        {/* Dot indicators for mobile */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {repos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-cyan-500 w-6" : "bg-gray-600"
                } flex items-center justify-center`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
