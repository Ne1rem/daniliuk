function About() {
  return (
    <section className="grid grid-cols-3 max-[850px]:grid-cols-1" id="about">
      <h3 className="font-normal text-[101px] leading-none max-sm:text-[57px] max-sm:leading-[100%]">
        About me
      </h3>
      <div className="flex flex-col col-span-2 max-md:col-span-1">
        <p
          className="font-medium font-manrope text-[32px] mb-4 text-white
        max-sm:font-normal max-sm:text-[24px] max-sm:leading-[140%]"
        >
          I am a front-end developer based in Ukraine. Has Mechanical
          Engineering background.{" "}
        </p>
        <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color mb-[53px] max-sm:text-[16px] max-sm:leading-[160%] max-sm:mb-[24px]">
          I am a front-end developer in Ukraine looking for exciting
          opportunities. Likes to focus on accessibility when developing.
          Passionate and curious about solving problems. Currently, I’m
          exploring Vue and a bit Angular. While I am not programming, I enjoy
          playing gym, cooking and playing Dota. Learning more to improve skill.
        </p>
        <a
          href="/public/CV_Daniliuk_FrontEnd.pdf"
          download={true}
          className="font-bold underline uppercase font-manrope text-[16px] text-button-bg leading-[150%]  transition-colors duration-500 hover:text-blue-500"
        >
          More about me
        </a>
      </div>
    </section>
  );
}

export default About;
