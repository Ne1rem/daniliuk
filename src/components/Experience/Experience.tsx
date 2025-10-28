import ExperienceList from "../ExperienceList/ExperienceList";
import Title from "../Title/Title";

function Experience() {
  return (
    <section className="grid grid-cols-2 max-[850px]:grid-cols-1" id="about">
      <Title name="My Experience" />
      <ExperienceList />
    </section>
  );
}

export default Experience;
