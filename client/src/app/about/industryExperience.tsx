import Image from "next/image";
import {
  Accessibility,
  AppWindow,
  Chrome,
  Globe,
  MonitorSmartphone,
  TabletIcon,
} from "lucide-react";
import MacImg from "../../assets/images/mac-ondesk.jpg";

const EXPERTISE_LIST = [
  { id: 1, title: "Web Accessibility", icon: <Accessibility /> },
  { id: 2, title: "Progressive Web App", icon: <TabletIcon /> },
  { id: 3, title: "Browser Extension Development", icon: <Chrome /> },
  {
    id: 4,
    title: "Mobile First Responsive Design",
    icon: <MonitorSmartphone />,
  },
  { id: 5, title: "Application Programming Interface", icon: <AppWindow /> },
  { id: 6, title: "Content Management System", icon: <Globe /> },
];

export const Expertise: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-left tracking-tight lg:text-3xl md:text-2xl text-lg">
        Industry Knowledge
      </h2>

      <div className="max-w-7xl">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-7 lg:gap-x-20">
          <div className="lg:col-span-3 lg:order-last">
            <div className="relative overflow-hidden">
              <Image
                className="object-cover rounded-md w-full h-full"
                src={MacImg}
                alt="coding desktop screen"
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
              Proficient in a range of web technologies and software development
              methodologies.
            </p>

            <hr className="mt-4 bg-gray-300 dark:border-gray-800 sm:mt-10" />

            <ul className="grid grid-cols-1 md:mt-6 mt-4 sm:grid-cols-2 sm:mt-6 gap-x-8 gap-y-4 sm:gap-y-4">
              {EXPERTISE_LIST.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start font-normal text-gray-600 dark:text-white"
                >
                  <span className="w-6 h-6 shrink-0 text-cyan-500">
                    {item.icon}
                  </span>
                  <span className="ml-2 text-sm md:text-base">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
