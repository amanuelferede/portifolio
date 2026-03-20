import Image from "next/image";
export default function Services() {
  return (
    <div className="max-w-7xl mx-auto pt-20 md:px-0 px-5" id="services">
      <div className="grid md:grid-cols-2 md:gap-7 gap-3">
        <div className="h-1/2 md:sticky md:top-10 md:border-2 md:p-20 p-5 md:border-white md:flex md:items-center md:justify-center">
          <div className="flex flex-col space-y-3 text-white">
            <p className="md:text-5xl text-3xl font-semibold">
              Web design service.
            </p>
            <p className="md:text-lg">
              {" "}
              A wide range of web design services crafted to suit different
              industries and audineces. Wheather you run a corporate business, a
              startup, or an e-commerce store, I have solutions tailored for
              you. I focus on creating intuitive, clean, and visually engaging
              websites.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="h-75 bg-white md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5  rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/headquarter.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Corporate webiste design.
              </p>
              <p className="text-black">
                Professional and elegant designs that establish authority.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/e-commerce.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                E-commerce website design.
              </p>
              <p className="text-black">
                User-centric layouts with optimized product displays.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/professional-portfolio.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Portifolio and persoanl websites
              </p>
              <p className="text-black">
                Creative designs for professionals and artists.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/landing-pages.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Landing page design.
              </p>
              <p className="text-black">
                Conversion-driven designs for marketing compaings.
              </p>
            </div>
          </div>

          <div className="h-75 bg-white md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-5 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 text-white">
              <p className="font-semibold text-lg text-black">
                Dedicated local support.
              </p>
              <p className="text-black">
                {" "}
                I am based in Ethiopian, so you can always rely on quick
                communication and on-ground assistance.
              </p>
            </div>
          </div>
          <div className="h-75 bg-white md:hover:-translate-y-3 transition-all duration-300 ease-in-out p-6 rounded-md md:shadow-xl shadow-md  text-center flex items-center justify-center">
            <div className="flex flex-col space-y-2 items-center text-black">
              <Image
                src={`/wd-services/web-development.png`}
                width={0}
                height={0}
                className="w-25 h-25"
                sizes="100vh"
                alt="web desgin"
              />
              <p className="font-semibold text-lg text-black">
                Custome webiste development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
