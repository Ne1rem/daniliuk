import linkedin from "../../../src/icons/linkedin.svg";
import github from "../../../src/icons/github.svg";

function AboutHeroLinks() {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <a
          href="/public/CV_Daniliuk_FrontEnd.pdf"
          download={true}
          className="flex flex-row justify-between py-[20px] pr-[6px] pl-[24px] gap-[12px] bg-button-bg rounded-[100px] w-[244px] h-[54px] font-manrope uppercase font-bold text-[16px] text-page-color items-center transition-all duration-500 hover:text-white hover:bg-blue-500 hover:scale-[1.1] max-sm:text-[14px] max-sm:leading-[100%] max-sm:px-0 max-sm:pl-[16px] max-sm:pr-[5px]"
        >
          Download Resume <span className="text-[40px] leading-[97%]">•</span>
        </a>
        <a
          href="https://www.linkedin.com/in/anatoliy-daniliuk-5006a819a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-button-bg-black rounded-[100px] w-[54px] h-[54px] justify-center items-center flex transition-all duration-500 hover:bg-blue-500 hover:scale-[1.25] max-sm:w-[48px] max-sm:h-[48px]"
        >
          <img
            src={linkedin}
            alt="Linkeidn"
            width="100"
            height="100"
            className="size-[26px] max-sm:size-[24px]"
          />
        </a>
        <a
          href="https://github.com/Ne1rem"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-button-bg-black rounded-[100px] w-[54px] h-[54px] justify-center items-center flex hover transition-all duration-500 hover:bg-blue-500 hover:scale-[1.25]"
        >
          <img
            src={github}
            alt="GitHub"
            width="100"
            height="100"
            className="size-[26px] max-sm:size-[24px]"
          />
        </a>
      </div>
    </>
  );
}

export default AboutHeroLinks;
