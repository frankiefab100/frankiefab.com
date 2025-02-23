"use client";

import Toast from "@/components/ui/Toast";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import MailPhoneIllustration from "../../assets/images/email-phone.png";

const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm(`process.env.FORMSPREE_FORM_ID`);
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      setShowToast(true);
    }
  };

  return (
    <section id="contact">
      <div className="py-24 max-w-7xl mx-auto lg:px-16 px-6">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-[#131313] dark:text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Contact <span className="text-cyan-600">Me</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
            Ready to collaborate? Fill out the form for inquiries or to discuss
            your project needs.
          </p>
        </div>

        <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 md:gap-x-6 gap-y-10">
          <div className="hidden md:flex flex-col justify-between lg:py-5">
            <h3 className="text-lg md:text-2xl lg:text-left text-center text-[#131313] dark:text-white">
              Send me a message
            </h3>
            <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
              I&apos;ll provide professional help to make your project a
              success.
            </p>

            <Image
              src={MailPhoneIllustration}
              alt="email phone illustration"
              width={400}
              height={400}
            />

            <div className="md:mt-auto">
              <div>
                <blockquote className="mt-6">
                  <p className="text-sm md:text-lg italic leading-relaxed text-[#131313] dark:text-white">
                    &quot;The best way to predict the future is to implement
                    it.&quot;
                  </p>
                </blockquote>
                <div className="flex items-center mt-1">
                  <div>
                    <p className="text-base md:text-lg font-normal text-cyan-500">
                      David Heinemeier Hansson
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md shadow-custom">
            <div className="p-6 sm:p-10">
              <form onSubmit={onSubmit} className="md:space-y-5 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-gray-700 font-normal text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full mt-1 px-1.5 py-1 sm:px-3 sm:py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-400 shadow-sm rounded-lg"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-normal text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full mt-1 px-1.5 py-1 sm:px-3 sm:py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-400 shadow-sm rounded-lg"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-gray-700 font-normal text-sm sm:text-base"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full mt-1 px-1.5 py-1 sm:px-3 sm:py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-400 shadow-sm rounded-lg"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-normal text-sm sm:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="resize-y block w-full px-2 py-3 sm:px-4 sm:py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-400"
                    rows={4}
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-3 py-3 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg cursor-pointer font-normal bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send"}
                </button>
                <ValidationError
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </form>
            </div>
          </div>
        </div>

        <Toast
          message="Your message has been sent successfully. I'll get back to you soon."
          isVisible={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </section>
  );
};

export default ContactPage;
