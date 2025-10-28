import arrow from "../../../src/icons/arrow.svg";
import github from "../../../src/icons/github.svg";
import { ProjectsListProps } from "../../Types/Projects";

function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <ul className="flex flex-col gap-[120px] items-center max-sm:gap-[96px]">
      {projects.map((project, index) => (
        <li
          key={index}
          className="flex flex-row gap-[48px] items-center max-xl:flex-col max-sm:gap-[40px]"
        >
          <img
            className="object-cover w-[650px] h-[347px] items-center justify-center rounded-lg max-sm:size-[343px]"
            src={project.img}
            alt={project.title}
            width={100}
            height={100}
          />

          <div className="flex flex-col justify-center 2xl:max-w-[1100px] xl:max-w-[800px] md:max-w-[600px] sm:max-w-[400px]">
            <div className="flex flex-col gap-4 mb-[32px]">
              <h3 className="font-manrope font-medium text-[32px] leading-[140%] text-white max-sm:text-[24px]">
                {project.title}
              </h3>
              <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color max-sm:text-[16px] max-sm:leading-[160%]">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col mb-[48px] max-sm:mb-[40px]">
              <p className="font-manrope font-semibold text-[16px] leading-[150%] uppercase text-white mb-4">
                Project info
              </p>
              <hr className="mb-0 border-text-bg" />
              <ul>
                {Object.entries(project.projectsInfo).map(
                  ([key, value]: [string, string]) => (
                    <li key={key}>
                      <p className="flex flex-row gap-8 justify-between font-manrope text-[16px] font-medium leading-[160%] text-primary-color items-center py-4">
                        <strong className="font-manrope font-medium text-[16px] leading-[160%] text-white">
                          {key}:
                        </strong>
                        {value}
                      </p>
                      <hr className="border-text-bg" />
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="flex gap-6 max-sm:justify-center">
              <a
                href={project.links.liveDemo}
                target="_blank"
                className="flex font-manrope font-bold text-[16px] leading-[150%] text-button-bg uppercase justify-center items-center gap-2 border-b-[3px] border-button-bg pb-[4px] transition-all duration-500 hover:text-blue-500 hover:border-blue-500 max-sm:text-[14px] max-sm:gap-[4px] max-sm:border-b-[2px]"
              >
                Live demo
                <img
                  src={arrow}
                  alt="Arrow"
                  width={100}
                  height={100}
                  className="size-[26px] max-sm:size-[22px]"
                />
              </a>
              <a
                href={project.links.github}
                target="_blank"
                className="flex font-manrope font-bold text-[16px] leading-[150%] text-button-bg uppercase justify-center items-center gap-2 border-b-[3px] border-button-bg pb-[4px] transition-all duration-500 hover:text-blue-500 hover:border-blue-500 max-sm:text-[14px] max-sm:gap-[4px] max-sm:border-b-[2px]"
              >
                See on Github
                <img
                  src={github}
                  alt="Github"
                  width={100}
                  height={100}
                  className="size-[26px] max-sm:size-[22px]"
                />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsList;
