import Image from "next/image";
// import Link from "next/link";
import {
  Accessibility,
  AppWindow,
  Chrome,
  Globe,
  MonitorSmartphone,
  TabletIcon,
} from "lucide-react";

const expertiseList = [
  { id: 1, title: "Web Accessibility", icon: <Accessibility /> },
  { id: 2, title: "Progressive Web App", icon: <TabletIcon /> },
  { id: 3, title: "Browser Extension Development", icon: <Chrome /> },
  {
    id: 4,
    title: "Mobile First Responsive Design",
    icon: <MonitorSmartphone />,
  },
  { id: 5, title: "Application Programming Interface", icon: <AppWindow /> },
  { id: 6, title: "Web Performance Optimization", icon: <Globe /> },
];

export const Expertise = () => {
  return (
    <div className="py-8 max-w-7xl mx-auto md:px-16 px-6">
      <h2 className="font-bold text-white text-left mb-4 tracking-tight md:text-3xl text-2xl">
        Industry <span className="text-cyan-600">Knowledge</span>
      </h2>

      <div className="max-w-7xl">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20">
          <div className="lg:col-span-3 lg:order-last">
            <div className="relative overflow-hidden">
              <Image
                className="object-cover rounded-md w-full h-full"
                src="/images/mac-ondesk.jpg"
                alt="coding desktop screen"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg font-normal text-gray-400">
              I bring extensive industry experience in developing innovative
              digital solutions that enhance user engagement and streamline
              project workflows.
            </p>

            <hr className="mt-8 border-gray-800 sm:mt-10" />

            <ul className="grid grid-cols-1 mt-6 sm:grid-cols-2 sm:mt-6 gap-x-8 gap-y-4 sm:gap-y-8">
              {expertiseList.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start font-normal text-white"
                >
                  <span className="w-6 h-6 shrink-0 text-cyan-500">
                    {item.icon}
                  </span>
                  <span className="ml-4 text-base">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
