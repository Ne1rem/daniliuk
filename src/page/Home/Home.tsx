import About from "../../sections/About/About";
import Contacts from "../../sections/Contacts/Contacts";
import Hero from "../../sections/Hero/Hero";
import Projects from "../../sections/Projects/Projects";
import projects from "../../data/projects.json";

function Home() {
  return (
    <>
      <div className="px-[108px] flex flex-col mb-[80px] mt-[30px] max-sm:mt-[40px] max-sm:mb-[64px] max-sm:px-[20px]">
        <Hero />
      </div>

      <hr className="border-t border-[#333] w-full" />

      <div className="px-[108px] flex flex-col my-[80px] max-sm:my-[64px] max-sm:px-[20px]">
        <Projects projects={projects} />
      </div>

      <hr className="border-t border-[#333] w-full " />

      <div className="px-[108px] flex flex-col my-[80px] max-sm:my-[64px] max-sm:px-[20px]">
        <About />
      </div>

      <hr className="border-t border-[#333] w-full" />

      <div className="px-[108px] flex flex-col my-[80px] max-lg:my-[64px] max-sm:px-[20px]">
        <Contacts />
      </div>
    </>
  );
}

export default Home;
