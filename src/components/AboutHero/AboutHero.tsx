import AboutHeroLinks from "../AboutHeroLinks/AboutHeroLinks";
import AboutHeroText from "../AboutHeroText/AboutHeroText";
import Title from "../Title/Title";

function AboutHero() {
  return (
    <section className="grid grid-cols-3 max-[850px]:grid-cols-1" id="about">
      <Title name="About Me" />
      <div className="flex flex-col col-span-2 max-md:col-span-1">
        <AboutHeroText />
        <AboutHeroLinks />
      </div>
    </section>
  );
}

export default AboutHero;
