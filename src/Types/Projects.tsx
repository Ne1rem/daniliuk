export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  projectsInfo: { [key: string]: string | number };
  links: {
    liveDemo: string;
    github: string;
  };
}

export interface ProjectsListProps {
  projects: Project[];
}
