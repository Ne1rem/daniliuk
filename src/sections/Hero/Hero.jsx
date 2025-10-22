import HeroText from "../../components/HeroText/HeroText";
import linkedin from "/src/icons/linkedin.svg";
import github from "/src/icons/github.svg";

function Hero() {
  return (
    <section className="flex flex-row justify-between max-lg:gap-[40px] gap-[80px] space max-md:flex-col max-md:items-center max-sm:gap-[64px] ">
      <div className="flex flex-col justify-center gap-[40px]">
        <HeroText />
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://t.me/tolik_dnlk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between py-[20px] pr-[6px] pl-[24px] gap-[12px] bg-button-bg rounded-[100px] w-[187px] h-[54px] font-manrope uppercase font-bold text-[16px] text-page-color items-center transition-all duration-500 hover:text-white hover:bg-blue-500 hover:scale-[1.125] max-sm:text-[14px] max-sm:leading-[100%] max-sm:px-0 max-sm:pl-[16px] max-sm:pr-[5px]"
          >
            Contact me <span className="text-[40px] leading-[97%]">•</span>
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
      </div>
      <img
        src="/me/me.png"
        alt="Daniliuk"
        width={100}
        height={100}
        className="w-[600px] h-[700px] object-cover rounded-[20px] max-xl:w-[400px] max-xl:h-[470px] transition-all duration-500 max-lg:w-[250px] max-lg:h-[350px] max-md:w-[300px] max-md:h-[340px] max-sm:w-[343x] max-sm:h-[378px]"
      />
    </section>
  );
}

export default Hero;
