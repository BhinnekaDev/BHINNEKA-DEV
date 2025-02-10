"use client";
import grainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-10 py-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          {/* Background image */}
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Text content */}
            <div>
              <h2 className="font-calistoga text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how we can help you achieve your goals.
              </p>
            </div>

            {/* Button */}
            <div>
              <button
                onClick={() =>
                  window.open("https://wa.me/+6281217044800", "_blank")
                }
                type="button"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-900/80 hover:text-white transition duration-300"
              >
                <span className="font-semibold">Contact Us</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
