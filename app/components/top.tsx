"use client";

import Link from "next/link";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

import { HiBars3 } from "react-icons/hi2";

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
      <HiBars3
        className="absolute w-10 h-10 top-5 right-6 md:hidden block text-white cursor-pointer"
        onClick={() => {
          setshouldMobileMenuOpen(true);
        }}
      />

      <div className="w-full">
        <div className="grid grid-cols-12 md:gap-10 gap-3">
          <div className="md:col-span-7 col-span-12">
            <div className="h-full w-full md:p-15 p-8">
              <p className="md:text-7xl text-5xl text-pink-500">
                Amanuel Ferede
              </p>
              <p className="md:text-3xl mt-4 text-white leading-relaxed">
                Frontend developer | Web developer | Fullstack web developer
              </p>
              <div className="flex md:space-x-5 items-center space-x-3 my-10">
                <Link
                  href={`https://www.linkedin.com/in/amanuel-ferede-65167a3b7/`}
                  target="_blank"
                >
                  <FaLinkedin className="md:w-10 md:h-10 text-white w-11 h-11" />
                </Link>
                <FaTelegram className="md:w-10 md:h-10 text-white w-11 h-11" />
                <FaWhatsapp className="md:w-10 md:h-10 text-white w-11 h-11" />
                <p className="md:text-4xl text-white">+251918634810</p>
              </div>
            </div>
          </div>
          <div
            className="md:col-span-5 col-span-12 h-screen  relative bg-red-500"
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
        <CgClose
          className="w-10 h-10 absolute top-6 right-10 cursor-pointer text-white"
          onClick={() => {
            setshouldMobileMenuOpen(false);
          }}
        />

        <div className="grid grid-rows-6 ">
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("about");
              setshouldMobileMenuOpen(false);
            }}
          >
            About
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("services");
              setshouldMobileMenuOpen(false);
            }}
          >
            Services
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("skills");
              setshouldMobileMenuOpen(false);
            }}
          >
            Skills
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("works");
              setshouldMobileMenuOpen(false);
            }}
          >
            Works
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("certificates");
              setshouldMobileMenuOpen(false);
            }}
          >
            Certificates
          </div>
          <div
            className="flex hover:bg-sky-950 hover:text-white  h-30 items-center justify-center text-white border-b border-b-transparent hover:border-b-white transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("contact");
              setshouldMobileMenuOpen(false);
            }}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
