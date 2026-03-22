"use client";
import Image from "next/image";
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
    <div className="max-w-7xl py-20 md:px-0 px-3 mx-auto relative">
      <HiBars3
        className="absolute w-10 h-10 top-5 right-6 md:hidden block text-white cursor-pointer"
        onClick={() => {
          setshouldMobileMenuOpen(true);
        }}
      />

      <div className="w-full">
        <div className="flex  items-center justify-center md:flex-row flex-col md:space-x-5 space-y-2">
          <Image
            src={`/banner.png`}
            width={0}
            height={0}
            className="w-30 h-30 rounded-full object-cover"
            sizes="100vh"
            alt="web desgin"
          />
          <div className="flex flex-col space-y-2.5 md:items-start items-center">
            <p className="md:text-6xl mb-2 text-lg text-sky-500">
              Amanuel Ferede
            </p>
            <p className="md:text-4xl mb-2 text-xl  text-white">
              Frontend developer | Web developer | Fullstack web developer
            </p>
            <div className="flex md:space-x-5 items-center space-x-3">
              <Link
                href={`https://www.linkedin.com/in/amanuel-ferede-65167a3b7/`}
                target="_blank"
              >
                <FaLinkedin className="w-7 h-7 text-white" />
              </Link>
              <FaTelegram className="w-7 h-7 text-white " />
              <FaWhatsapp className="w-7 h-7 text-white" />
              <p className=" text-white">+251918634810</p>
            </div>
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
              goToSection("portifolio");
              setshouldMobileMenuOpen(false);
            }}
          >
            Portifolio
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
