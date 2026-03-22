import AboutMe from "./components/aboutme";
import BackToTop from "./components/backtotop";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Sidebar from "./components/sidebar";
import Skills from "./components/skills";
import Top from "./components/top";
import Works from "./components/works";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-gray-800 to-gray-900 to-50% min-h-screen">
      <Sidebar />
      <div className="md:w-[90%] md:ml-[10%] w-full ml-0 ">
        <Top />
        <AboutMe />

        <Skills />

        {/* <SoftwareDevelopmentServices /> */}
        <Works />
        <Certificates />
        <Contact />
        <BackToTop />
      </div>
    </div>
  );
}
