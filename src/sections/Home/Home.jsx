import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

function Home() {
  const projects = [
    {
      id: 1,
      img: "/projects/vesta.jpg",
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      projectsInfo: {
        Year: 2023,
        Role: "Front-end Developer",
        Technologies: "NextJS, React, Tailwind",
      },
      links: {
        liveDemo: "https://www.ngovesta.org/",
        showDemo: false,
        github: "https://github.com/SoftRyzen-internship/vesta_main_site",
      },
    },
    {
      id: 2,
      img: "/projects/tastytreats.png",
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
      projectsInfo: {
        Year: 2021,
        Role: "Front-end Developer",
        Technologies: "React",
      },
      links: {
        liveDemo: "https://annakotl.github.io/upGrate/",
        showDemo: false,
        github: "https://github.com/AnnaKotl/upGrate",
      },
    },
    {
      id: 3,
      img: "/projects/superfood.jpg",
      title: "E-commerce product page",
      description:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      projectsInfo: {
        Year: 2023,
        Role: "Front-end Developer",
        Technologies: "NextJS",
      },
      links: {
        liveDemo: "https://superfood.vercel.app/",
        showDemo: false,
        github: "https://github.com/SoftRyzen-internship/superfood",
      },
    },
  ];

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
