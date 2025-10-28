import HeroLinks from "../../components/HeroLinks/HeroLinks";
import HeroText from "../../components/HeroText/HeroText";

function Hero() {
  return (
    <section className="flex flex-row justify-between max-lg:gap-[40px] gap-[80px] space max-md:flex-col max-md:items-center max-sm:gap-[64px] ">
      <div className="flex flex-col justify-center gap-[40px]">
        <HeroText />
        <HeroLinks />
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
