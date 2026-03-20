import AboutMe from "./components/aboutme";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Services from "./components/services";
import Sidebar from "./components/sidebar";
import Skills from "./components/skills";
import Top from "./components/top";
import Works from "./components/works";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-sky-950 to-black to-95% min-h-screen">
      <Sidebar />
      <div className="md:w-[90%] md:ml-[10%] w-full ml-0 ">
        <Top />
        <AboutMe />

        <Skills />
        <Services />
        {/* <SoftwareDevelopmentServices /> */}
        <Works />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
}
