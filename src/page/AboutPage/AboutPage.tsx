import AboutHero from "../../components/AboutHero/AboutHero";
import Capabilities from "../../components/Capabilities/Capabilities";
import Experience from "../../components/Experience/Experience";
import Contacts from "../../sections/Contacts/Contacts";

function AboutPage() {
  return (
    <>
      <div className="px-[108px] flex flex-col my-[80px] max-sm:my-[64px] max-sm:px-[20px]">
        <AboutHero />
      </div>

      <hr className="border-t border-[#333] w-full" />

      <div className="px-[108px] flex flex-col my-[80px] max-sm:my-[64px] max-sm:px-[20px]">
        <Capabilities />
      </div>

      <hr className="border-t border-[#333] w-full" />

      <div className="px-[108px] flex flex-col my-[80px] max-sm:my-[64px] max-sm:px-[20px]">
        <Experience />
      </div>

      <hr className="border-t border-[#333] w-full" />

      <div className="px-[108px] flex flex-col my-[80px] max-sm:my-[64px] max-sm:px-[20px]">
        <Contacts />
      </div>
    </>
  );
}

export default AboutPage;
