"use client";
import { services } from "@/constants/services";

export default function ServicesSection() {
  return (
    <section className="w-full">
      <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-center my-8 tracking-tight lg:text-4xl text-3xl">
        What I {""}
        <span className="text-cyan-600">Do</span>
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start space-y-2 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex justify-center items-center">
                <div className="max-w-9 rounded-2xl bg-[#f8f8f7] dark:bg-gray-800/50 p-2 ring-1 ring-[#fafafc] dark:ring-gray-700/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#f4f5f8] group-hover:ring-[#ededed] dark:group-hover:bg-gray-800/70 dark:group-hover:ring-gray-600/70">
                  <service.icon className="h-5 w-5 text-gray-400 dark:text-gray-400 transition-colors duration-300 hover:text-gray-500 hover:dark:text-gray-300" />
                </div>
                <h3 className="font-CooperHewittMedium mt-2 ml-2 text-left md:text-xl text-lg tracking-tight text-gray-800 dark:text-gray-100">
                  {service.title}
                </h3>
              </div>
              <p className="text-left text-base md:text-lg md:leading-7 leading-6 text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
