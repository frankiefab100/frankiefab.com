"use client";

import Toast from "@/components/ui/Toast";
import { useForm, ValidationError } from "@formspree/react";
import { FormEvent, useState } from "react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm(`process.env.FORMSPREE_FORM_ID`);
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    // const result = await handleSubmit(e);
    if (state.succeeded) {
      setShowToast(true);
    }
  };

  return (
    <section>
      <div className="py-24 max-w-7xl mx-auto lg:px-16 px-8">
        {/* <section className="bg-black px-14 py-24 sm:py-16 lg:py-24 md:px-24 lg:px-40"> */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bold text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Contact <span className="text-cyan-600">Me</span>
          </h2>
          <p className="text-lg font-normal text-zinc-400">
            Please fill out the form, if you need my services or for any
            inquiries
          </p>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col justify-between lg:py-5">
              <div>
                <h3 className="text-xl lg:text-2xl lg:text-left text-center font-mono text-white">
                  Let&apos;s bring that idea to life!
                </h3>
                <p className="text-lg lg:text-left text-center leading-7 text-zinc-400 max-w-3xl mt-1">
                  Need help on your project, written documents for your product
                  or want me to speak at your event? Don&apos;t hesitate to
                  reach out.
                </p>
              </div>
              <div className="hidden md:mt-auto md:block">
                <div>
                  <blockquote className="mt-6">
                    <p className="text-lg leading-relaxed text-white">
                      &quot;The best way to predict the future is to implement
                      it.&quot;
                    </p>
                  </blockquote>
                  <div className="flex items-center mt-1">
                    <div>
                      <p className="text-base font-semibold text-cyan-500">
                        David Heinemeier Hansson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-hidden bg-white rounded-md">
                <div className="p-6 sm:p-10">
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="font-normal text-base">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-500 shadow-sm rounded-lg"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-normal text-base">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-500 shadow-sm rounded-lg"
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
                        className="font-normal text-base"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        required
                        className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-cyan-500 shadow-sm rounded-lg"
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
                        className="font-normal text-base"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="resize-y block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
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
                      className="w-full px-6 py-3 rounded-lg cursor-pointer font-normal bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
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
