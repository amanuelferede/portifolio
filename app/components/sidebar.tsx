"use client";

export default function Sidebar() {
  const goToSection = (to: string) => {
    const element = document.getElementById(`${to}`);
    const offsetTop = element?.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="md:w-[10%] md:block hidden z-20 h-screen  fixed top-0 left-0 right-0 bottom-0 bg-linear-to-b from-sky-950 to-black to-95%">
        <div className="grid grid-rows-6 ">
          <div
            className="flex md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2 border-b-transparent border-t-transparent hover:border-b-pink-600 hover:border-t-pink-600 transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("about");
            }}
          >
            About
          </div>
          <div
            className="flex md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2 border-b-transparent border-t-transparent hover:border-b-pink-600 hover:border-t-pink-600 transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("services");
            }}
          >
            Services
          </div>
          <div
            className="flex md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2 border-b-transparent border-t-transparent hover:border-b-pink-600 hover:border-t-pink-600 transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("skills");
            }}
          >
            Skills
          </div>
          <div
            className="flex md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2 border-b-transparent border-t-transparent hover:border-b-pink-600 hover:border-t-pink-600 transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("works");
            }}
          >
            Works
          </div>
          <div
            className="flex md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2 border-b-transparent border-t-transparent hover:border-b-pink-600 hover:border-t-pink-600 transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("certificates");
            }}
          >
            Certificates
          </div>
          <div
            className="flex md:hover:bg-linear-to-b from-sky-00 to-sky-900 to-95% cursor-pointer hover:text-pink-200  h-30 items-center justify-center text-pink-200 border-b-2 border-t-2 border-b-transparent border-t-transparent hover:border-b-pink-600 hover:border-t-pink-600 transition-all duration-500 ease-in-out last:hover:border-b-transparent"
            onClick={() => {
              goToSection("contact");
            }}
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
