"use-client";
import { useSubstackEmbed } from "@/utils/useSubstackEmbed";
import { useEffect } from "react";

export const Newsletter = () => {
  useSubstackEmbed();

  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "frankiefab.substack.com",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#3e68e2",
        input: "#000",
        email: "#fff",
        text: "#d8e2f4",
      },
    };
  }, []);

  return (
    <section className="pt-10 max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden text-center px-8 py-14 rounded-2xl bg-gradient-to-r from-[#0a2227] to-[#00012e] p-8 md:p-12 shadow-2xl">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h2 className="font-CooperHewittMedium text-2xl md:text-3xl text-white font-bold">
              Subscribe to my newsletter
            </h2>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed">
              Stay up to date and get notified when I share new contents.
            </p>
          </div>
          <div className="mt-6">
            <div id="custom-substack-embed"></div>

            <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
              No spam ever, unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
