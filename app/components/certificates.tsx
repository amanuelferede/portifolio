import Image from "next/image";
import Link from "next/link";
export default function Certificates() {
  return (
    <div className="max-w-7xl mx-auto py-20 md:px-0 px-2" id="certificates">
      <p className="text-lg my-10 text-gray-50 text-center">Certificates</p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-5 bg-white text-black rounded-2xl flex flex-col items-center space-y-2.5 ">
          <Image
            src={`/certificates/diploma.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-20 h-20 object-cover  "
          />
          <p className="md:text-3xl text-xl font-semibold text-center">
            Temporary degree certificate.
          </p>
          <p className="text-center text-sky-900">
            An official document verifying a student’s graduation. It acts as a
            valid substitute for the original diploma, detailing the course,
            pass-out year, and candidate name, usually issued while waiting for
            the official convocation ceremony.
          </p>
          <Link
            href={`https://drive.google.com/file/d/1xRznePwCtXdFLe4M79-x3qdztduWzwre/view?usp=sharing`}
            target="_blank"
            className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
          >
            View Certificate
          </Link>
        </div>

        <div className="p-5 bg-white text-black rounded-2xl flex flex-col items-center space-y-2.5 ">
          <Image
            src={`/certificates/a-score.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-20 h-20 object-cover  "
          />
          <p className="md:text-3xl text-xl font-semibold text-center">
            Grade records.
          </p>
          <p className="text-center text-sky-900">
            Official documents maintained by a university’s Registrar that list
            all courses, credits, and grades earned throughout a student&apos;s
            career.
          </p>
          <Link
            href={`https://drive.google.com/file/d/1BLfePYf2e041NBdBz8pOK3XHNBtnexma/view?usp=sharing`}
            target="_blank"
            className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
          >
            View Certificate
          </Link>
        </div>

        <div className="p-5 bg-white text-black rounded-2xl flex flex-col items-center space-y-2.5 ">
          <Image
            src={`/certificates/programming.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-20 h-20 object-cover  "
          />
          <p className="md:text-3xl text-xl font-semibold text-center">
            Programming fundamentals udacity
          </p>
          <p className="text-center text-sky-900">
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

        <div className="p-5 bg-white text-black rounded-2xl flex flex-col items-center space-y-2.5 ">
          <Image
            src={`/certificates/app-development.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-20 h-20 object-cover  "
          />
          <p className="md:text-3xl text-xl font-semibold text-center">
            Android kotlin development fundamentals udacity
          </p>
          <p className="text-center text-sky-900">
            This is a comprehensive, intermediate-level paid program designed to
            make you a job-ready Android developer. It covers fundamental and
            advanced topics through real-world projects.
          </p>
          <Link
            href={`https://drive.google.com/file/d/1K8nskRCbejyZswv6zuXu7Xjvsu3ZJRE2/view?usp=sharing`}
            target="_blank"
            className="mt-5 text-center md:w-1/2 w-auto md:py-3 py-2 md:px-0 px-2 rounded-xl bg-sky-600 text-white"
          >
            View Certificate
          </Link>
        </div>

        <div className="p-5 bg-white text-black rounded-2xl flex flex-col items-center space-y-2.5 ">
          <Image
            src={`/certificates/wave-chart.png`}
            alt="fb-clone"
            width={0}
            height={0}
            sizes="100vh"
            className="w-20 h-20 object-cover  "
          />

          <p className="md:text-3xl text-xl font-semibold text-center">
            Data science fundamentals udacity
          </p>
          <p className="text-center text-sky-900">
            A high-level overview covering the data science process (CRISP-DM),
            basic data types, summary statistics, and effective data
            visualization.
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
  );
}
