"use client";

import { useState } from "react";

export default function Top() {
  const goToSection = (to: string) => {
    const element = document.getElementById(`${to}`);
    const offsetTop = element?.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const [shouldMobileMenuOpen, setshouldMobileMenuOpen] =
    useState<boolean>(false);
  return (
    <div className="w-full min-h-screen relative">
      <p
        className="absolute top-5 right-10 md:hidden block text-white cursor-pointer"
        onClick={() => {
          setshouldMobileMenuOpen(true);
        }}
      >
        Open
      </p>

      <div className="w-full">
        <div className="grid grid-cols-12 gap-10">
          <div className="md:col-span-7 col-span-12">
            <div className="h-full p-25">
              <p className="text-7xl text-white">Amanuel Ferede</p>
              <p className="text-3xl mt-4 text-white leading-relaxed">
                Frontend developer | Web developer | Fullstack web developer
              </p>
              {/* <div className="md:flex hidden md:space-x-2 space-x-3">
                <FaFacebook className="md:w-6 md:h-6 w-6 h-6" />
                <FiInstagram className="md:w-6 md:h-6 w-6 h-6" />
                <FaLinkedin className="md:w-6 md:h-6 w-6 h-6" />
                <FaXTwitter className="md:w-6 md:h-6 w-6 h-6" />
                <FaTelegram className="md:w-6 md:h-6 w-6 h-6" />
                <FaWhatsapp className="md:w-6 md:h-6 w-6 h-6" />
                <FaTiktok className="md:w-6 md:h-6 w-6 h-6" />
              </div> */}
            </div>
          </div>
          <div
            className="md:col-span-5 col-span-12 h-screen  relative"
            style={{
              backgroundImage: `url('/banner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" absolute top-0 left-0 right-0 bottom-0 bg-pink-600/40"></div>
            <div className="p-20"></div>
          </div>
        </div>
      </div>
      <div
        className={`bg-sky-950 fixed top-0 left-0 right-0 bottom-0 z-10 ${shouldMobileMenuOpen ? "md:hidden block" : "hidden"}`}
      >
        <p
          className="absolute top-6 right-10 cursor-pointer text-white"
          onClick={() => {
            setshouldMobileMenuOpen(false);
          }}
        >
          close
        </p>
        <div className="grid grid-rows-6 ">
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("about");
            }}
          >
            About
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("services");
            }}
          >
            Services
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("skills");
            }}
          >
            Skills
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("works");
            }}
          >
            Works
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("certificates");
            }}
          >
            Certificates
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("contact");
            }}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
