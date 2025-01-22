"use client";
import { services } from "@/constants/services";

export default function ServicesSection() {
  return (
    <section className="w-full py-24 md:px-10 lg:px-16">
      <h2 className="font-bold text-[#131313] dark:text-white text-center my-8 tracking-tight lg:text-4xl text-3xl">
        What I {""}
        <span className="text-cyan-600">Do</span>
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start space-y-3 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex justify-center items-center sm:block">
                <div className="w-[60px] mr-3 rounded-2xl bg-gray-800/50 p-5 ring-1 ring-gray-700/50 backdrop-blur-sm transition-colors duration-300 group-hover:bg-gray-800/70 group-hover:ring-gray-600/70">
                  <service.icon className="h-5 w-5 text-gray-200 dark:text-gray-400 transition-colors duration-300 hover:text-gray-100 hover:dark:text-gray-300" />
                </div>
                <h3 className="font-Bitform mt-2 text-left text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
                  {service.title}
                </h3>
              </div>
              <p className="text-left text-base leading-7 text-gray-700 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
