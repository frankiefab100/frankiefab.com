import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EventsList } from "../../../lib/types";

const events: EventsList[] = [
  {
    id: 1,
    category: "Conference",
    date: "Feb 11 2021",
    title: "FOSS Backstage 2021",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature.",
    link: "https://youtube.com",
    slide: "/",
  },
  {
    id: 2,
    category: "Tech Meetup",
    date: "Sep 10 2022",
    title: "OSCA Abuja x FOF Abuja",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature.",
    link: "/",
    slide: "/",
  },
  {
    id: 3,
    category: "Webinar",
    date: "Jan 01 2024",
    title: "Community 100",
    desc: "Glossier echo park pug, church-key sartorial biodiesel vexillolog wolfvaporware kombucha  polaroid hoodie portland craft beer.",
    link: "/",
    slide: "/",
  },
  {
    id: 4,
    category: "Workshop",
    date: "Jan 02 2022",
    title: "Community 100",
    desc: "Glossier echo park pug, church-key sartorial biodiesel vexillolog wolfvaporware kombucha  polaroid hoodie portland craft beer.",
    link: "/",
    slide: "/",
  },
];

const Talks = () => {
  return (
    <section>
      {/* <section className="bg-black text-zinc-400 overflow-hidden px-14 py-24 sm:py-16 lg:py-24 md:px-24 lg:px-40"> */}
      {/* <section className="bg-gray-900 text-zinc-400 overflow-hidden px-16 py-24"> */}
      <div className="text-zinc-400 py-24 max-w-7xl mx-auto lg:px-16 px-8">
        <div className="mb-6 flex flex-col text-center w-full">
          <h2 className="font-bold text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Speaking {""}
            <span className="text-cyan-600">Engagements</span>
          </h2>
          <p className="text-lg font-normal text-gray-400">
            Some of my talks and workshop at tech events, meetups, conferences
            and online webinars.
          </p>
        </div>

        <div className="container py-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            {events.map((talk) => (
              <div key={talk.id} className="py-6 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-300">
                    {talk.category}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {talk.date}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <Link href={`talk.link`}>
                    <h2 className="text-2xl font-medium text-gray-300 hover:text-gray-200 title-font mb-2">
                      {talk.title}
                    </h2>
                  </Link>
                  <p className="leading-relaxed">{talk.desc}</p>
                  <Link
                    href={`talk.slide`}
                    className="text-cyan-500 inline-flex items-center mt-4 hover:text-cyan-400"
                  >
                    Slide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background gradient effect */}
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
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
