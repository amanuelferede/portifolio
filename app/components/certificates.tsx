import Image from "next/image";
import Link from "next/link";
export default function Certificates() {
  return (
    <div className="max-w-7xl mx-auto py-20 md:px-0 px-2" id="certificates">
      <p className="text-lg my-10 text-gray-50 text-center">Certificates</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-transparent flex md:flex-row flex-col items-center md:rounded-2xl border border-white w-full md:space-x-5 space-x-0 md:space-y-0 space-y-2 p-2">
          <Image
            src={`/certificates/diploma.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-30 h-30 object-cover  "
          />

          <div className="p-10 bg-white text-black rounded-2xl flex flex-col space-y-2.5 ">
            <p className="text-3xl">Temporary degree certificate.</p>
            <p>
              An official document verifying a student’s graduation. It acts as
              a valid substitute for the original diploma, detailing the course,
              pass-out year, and candidate name, usually issued while waiting
              for the official convocation ceremony.
            </p>
            <Link
              href={`https://drive.google.com/file/d/1xRznePwCtXdFLe4M79-x3qdztduWzwre/view?usp=sharing`}
              target="_blank"
              className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
            >
              View Certificate
            </Link>
          </div>
        </div>
        <div className="bg-transparent flex md:flex-row flex-col items-center md:rounded-2xl border border-white w-full md:space-x-5 space-x-0 md:space-y-0 space-y-2 p-2">
          <Image
            src={`/certificates/a-score.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-30 h-30 object-cover  "
          />

          <div className="p-10 bg-white text-black rounded-2xl flex flex-col space-y-2.5 ">
            <p className="text-3xl">Grade records.</p>
            <p>
              Official documents maintained by a university’s Registrar that
              list all courses, credits, and grades earned throughout a
              student&apos;s career.
            </p>
            <Link
              href={`https://drive.google.com/file/d/1BLfePYf2e041NBdBz8pOK3XHNBtnexma/view?usp=sharing`}
              target="_blank"
              className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
            >
              View Certificate
            </Link>
          </div>
        </div>
        <div className="bg-transparent flex md:flex-row flex-col items-center md:rounded-2xl border border-white w-full md:space-x-5 space-x-0 md:space-y-0 space-y-2 p-2">
          <Image
            src={`/certificates/programming.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-30 h-30 object-cover  "
          />

          <div className="p-10 bg-white text-black rounded-2xl flex flex-col space-y-2.5 ">
            <p className="text-3xl">Programming fundamentals udacity</p>
            <p>
              A comprehensive, 4-month beginner-friendly program (approx. 10
              hours/week). It covers the basics of HTML, CSS, Python, and
              JavaScript through six mandatory stages and hands-on projects.
            </p>
            <Link
              href={`https://drive.google.com/file/d/1JOJPL1EA0u-UJB2Ox2f2-Zqi1c-z0FtX/view?usp=sharing`}
              target="_blank"
              className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
            >
              View Certificate
            </Link>
          </div>
        </div>
        <div className="bg-transparent flex md:flex-row flex-col items-center md:rounded-2xl border border-white w-full md:space-x-5 space-x-0 md:space-y-0 space-y-2 p-2">
          <Image
            src={`/certificates/app-development.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-30 h-30 object-cover  "
          />

          <div className="p-10 bg-white text-black rounded-2xl flex flex-col space-y-2.5 ">
            <p className="text-3xl">
              Android kotlin development fundamentals udacity
            </p>
            <p>
              This is a comprehensive, intermediate-level paid program designed
              to make you a job-ready Android developer. It covers fundamental
              and advanced topics through real-world projects.
            </p>
            <Link
              href={`https://drive.google.com/file/d/1K8nskRCbejyZswv6zuXu7Xjvsu3ZJRE2/view?usp=sharing`}
              target="_blank"
              className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
            >
              View Certificate
            </Link>
          </div>
        </div>
        <div className="bg-transparent flex md:flex-row flex-col items-center md:rounded-2xl border border-white w-full md:space-x-5 space-x-0 md:space-y-0 space-y-2 p-2">
          <Image
            src={`/certificates/wave-chart.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-30 h-30 object-cover  "
          />

          <div className="p-10 bg-white text-black rounded-2xl flex flex-col space-y-2.5 ">
            <p className="text-3xl">Data science fundamentals udacity</p>
            <p>
              A high-level overview covering the data science process
              (CRISP-DM), basic data types, summary statistics, and effective
              data visualization.
            </p>
            <Link
              href={`https://drive.google.com/file/d/1gZ37FDQTPlx5utZ__W51lLB-Wi8qNVLe/view?usp=sharing`}
              target="_blank"
              className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
            >
              View Certificate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
