import Image from "next/image";

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-3 py-5" id="skills">
      <p className="text-lg my-10 text-gray-50 text-center">
        Skills and proficiences.
      </p>

      <div className="grid md:grid-cols-4 md:gap-10 gap-5 mb-5 ">
        <div className="bg-white  md:hover:-translate-y-3 h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white  items-center">
            <Image
              src={`/why choose us/programming.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />

            <div className="flex flex-col space-y-2 text-black">
              <p className="font-semibold text-lg">Professional web desgin</p>
            </div>
          </div>
        </div>
        <div className="bg-white  md:hover:-translate-y-3 h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white items-center">
            <Image
              src={`/why choose us/stack.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2 text-black">
              <p className="font-semibold text-lg">Responsive web desgin</p>
            </div>
          </div>
        </div>
        <div className="bg-white  md:hover:-translate-y-3 h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white items-center">
            <Image
              src={`/why choose us/search-engine-optimization.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2 text-black">
              <p className="font-semibold text-lg">Website development.</p>
            </div>
          </div>
        </div>
        <div className="bg-white  md:hover:-translate-y-3 h-60 transition-all duration-300 ease-in-out p-5 rounded-xl shadow-xl text-center flex items-center justify-center">
          <div className="flex flex-col space-y-3 text-white items-center">
            <Image
              src={`/why choose us/responsive.png`}
              width={0}
              height={0}
              className="w-20 h-20"
              sizes="100vh"
              alt="web desgin"
            />
            <div className="flex flex-col space-y-2 text-black">
              <p className="font-semibold text-lg">
                Fullstack web development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-7 gap-5">
        <div>
          <p className="text-lg my-5 text-sky-200 text-center">
            Frontend technologies
          </p>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-5">
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              HTML
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              CSS
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Javascript
            </div>

            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Typescript
            </div>

            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              React
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Next.js
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Node.js
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg my-5 text-sky-200 text-center">
            Frontend technologies
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-7 gap-5">
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Tailwind CSS
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Redux
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              REST-FULL API
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              Prisma ORM
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              SQL
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              MONGO DB
            </div>
            <div className="rounded-xl border border-sky-200  text-white px-3 py-2.5 text-center">
              POSTGRESS SQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
