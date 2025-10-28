import ListCapabilities from "../ListCapabilities/ListCapabilities";
import Title from "../Title/Title";

function Capabilities() {
  return (
    <section className="grid grid-cols-2 max-[850px]:grid-cols-1" id="about">
      <Title name="My Capabilities" />
      <div className="flex flex-col col-span-1 max-md:col-span-1">
        <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color mb-[32px] max-sm:text-[16px] max-sm:leading-[160%] max-sm:mb-[24px]">
          I’m always eager to expand my capabilities in front-end development.
          From mastering new frameworks to refining design-to-code precision, I
          strive to build interfaces that are both functional and visually
          engaging. Continuous growth is at the core of my craft.
        </p>
        <ListCapabilities />
      </div>
    </section>
  );
}

export default Capabilities;
