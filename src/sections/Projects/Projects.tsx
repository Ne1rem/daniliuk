import ProjectsList from "../../components/ProjectsList/ProjectsList";
import ProjectsTitle from "../../components/ProjectsTitle/ProjectsTitle.jsx";
import { ProjectsListProps } from "../../Types/Projects";

function Projects({ projects }: ProjectsListProps) {
  return (
    <section id="projects">
      <ProjectsTitle />
      <ProjectsList projects={projects} />
    </section>
  );
}

export default Projects;
