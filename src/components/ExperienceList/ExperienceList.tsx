function ExperienceList() {
  return (
    <>
      <ul className="flex flex-col gap-[60px]">
        <li>
          <div className="flex flex-row justify-between mb-5">
            <p className="font-manrope font-medium text-[24px] leading-[130%] text-white">
              Front-End Intern
            </p>
            <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
              Apr 2024 — Jul 2024
            </p>
          </div>
          <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
            Completed a 2-month internship at SoftRyzen as part of a 7-person
            development team. Worked with Next.js and Tailwind CSS on real
            product features, collaborated through code reviews and task
            planning, and gained my first commercial development experience.
          </p>
        </li>
        <li>
          <div className="flex flex-row justify-between mb-5">
            <p className="font-manrope font-medium text-[24px] leading-[130%] text-white">
              Front-End Courses
            </p>
            <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
              Feb 2023 — Dec 2023
            </p>
          </div>
          <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
            Completed Fullstack training at GOIT. Gained a solid understanding
            of HTML, CSS, JavaScript, and learned to work with React, Redux, and
            Node.js. Participated in team projects, code reviews, and learned
            essential teamwork and development practices.
          </p>
        </li>
      </ul>
    </>
  );
}

export default ExperienceList;
