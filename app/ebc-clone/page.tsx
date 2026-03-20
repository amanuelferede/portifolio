import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
export default function HuluFashionApp() {
  return (
    <div
      className={`z-20 fixed bg-linear-to-b from-sky-950 to-black to-95% top-0 left-0 right-0 bottom-0 transition-all duration-500 ease-in-out`}
    >
      <Link href={`/`}>
        <CgClose className="w-15 h-15 absolute top-10 right-14 text-white cursor-pointer" />
      </Link>
      <div className="max-w-6xl  h-screen overflow-y-auto mt-20 mx-auto p-20 bg-white">
        <div className=" grid md:grid-cols-2">
          <div className="">
            <Image
              src={`/works/ebc-clone/c.png`}
              width={0}
              height={0}
              className="w-full mb-10"
              sizes="100vh"
              alt="web desgin"
            />

            <Link
              href={`https://ebc-clone-pied.vercel.app/`}
              target="_blank"
              className="my-5 block text-center w-1/2 py-2.5 rounded-xl bg-sky-900 text-white"
            >
              Live Demo
            </Link>

            <ul className="flex flex-col space-y-3 text-xl py-5">
              <li>
                <span className="font-semibold">Frontend: </span>Next.js (App
                Router, Server Components, Client Components), React, TypeScript
              </li>
              <li>
                <span className="font-semibold">Styling: </span>Tailwind CSS,
              </li>
              <li>
                <span className="font-semibold">Backend: </span>Next.js Server
                Actions/API Routes
              </li>
              <li>
                <span className="font-semibold">Database</span> PostgreSQL,
                Prisma ORM
              </li>
              <li>
                <span className="font-semibold">Authentication</span>{" "}
                NextAuth.js
              </li>
              <li>
                <span className="font-semibold">
                  State Management/Data Fetching:
                </span>{" "}
                Redux Toolkit, React Context
              </li>
              <li>
                <span className="font-semibold">Media Storage:</span> Vercel
              </li>
              <li>
                <span className="font-semibold">Vercel :</span> Vercel
              </li>
            </ul>
          </div>
          <div className="p-10">
            <p className="my-2 text-pink-800 font-bold text-4xl">
              Key features learned.
            </p>

            <ul className="flex flex-col space-y-3 text-2xl list-disc">
              <li>
                <p className="font-semibold">
                  How to build any beautiful website in any design using next.js
                  and tailwind.css{" "}
                </p>
              </li>
              <li>
                <p className="font-semibold">Responsive desgin </p>
              </li>
              <li>Database integraion with next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
