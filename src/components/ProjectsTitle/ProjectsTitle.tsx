import Title from "../Title/Title";

function ProjectsTitle() {
  return (
    <>
      <div className="flex flex-col gap-2 mb-[80px] max-w-[600px] max-sm:mb-[64px] max-sm:gap-3">
        <Title name="My Projects" />
        <p className="text-primary-color font-manrope font-normal text-[18px] leading-[150%] max-sm:text-[16px] max-sm:leading-[160%]">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
    </>
  );
}

export default ProjectsTitle;
