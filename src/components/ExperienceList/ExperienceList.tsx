function ExperienceList() {
  return (
    <>
      <ul className="flex flex-col gap-[60px]">
        <li>
          <div className="flex flex-row justify-between mb-5">
            <p className="font-manrope font-medium text-[24px] leading-[130%] text-white">
              Freelance Developer
            </p>
            <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
              Nov 2023 — Present
            </p>
          </div>
          <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </li>
        <li>
          <div className="flex flex-row justify-between mb-5">
            <p className="font-manrope font-medium text-[24px] leading-[130%] text-white">
              Front-End Intern
            </p>
            <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
              Sep 2023 — Nov 2023
            </p>
          </div>
          <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </li>
      </ul>
    </>
  );
}

export default ExperienceList;
