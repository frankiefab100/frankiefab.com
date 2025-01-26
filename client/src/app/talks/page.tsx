import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { events } from "@/constants/speaking";

const Talks = () => {
  let sortedEvents = events.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <section id="talks">
      <div className="text-gray-700 dark:text-gray-400 py-24 max-w-7xl mx-auto lg:px-16 px-6">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Speaking {""}
            <span className="text-cyan-600">Engagements</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
            I&apos;ve had the privilege of sharing my knowledge and experiences
            with diverse audiences at conferences, meetups, and workshops.
          </p>
        </div>

        <div className="container py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-200 dark:divide-gray-800">
            {sortedEvents.map((talk) => (
              <div key={talk.id} className="py-6 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-500 dark:text-gray-300">
                    {talk.category}
                  </span>
                  <span className="mt-1 font-normal text-gray-400 dark:text-gray-500 text-sm">
                    {talk.date}
                  </span>
                </div>
                <div className="md:flex-grow">
                  {talk.link ? (
                    <Link
                      href={talk.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-lg md:text-xl font-medium text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 title-font">
                        {talk.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 title-font">
                      {talk.title}
                    </h3>
                  )}
                  <p className="mt-1 mb-3 font-light uppercase md:text-sm text-xs leading-relaxed">
                    {talk.desc}
                  </p>
                  {talk.slide ? (
                    <Link
                      href={talk.slide as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 inline-flex items-center hover:text-cyan-600"
                    >
                      See Slide
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      See Slide <ChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background gradient effect */}
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[100px] mx-auto md:max-w-3xl md:h-[400px] opacity-50"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Talks;
