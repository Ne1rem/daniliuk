import linkedin from "../../../src/icons/linkedin.svg";
import github from "../../../src/icons/github.svg";
import telegram from "../../../src/icons/telegram.svg";
import instagram from "../../../src/icons/instagram.svg";

function ContactsLinks() {
  return (
    <>
      <div className="flex flex-row gap-6 max-sm:gap-[32px]">
        <a
          href="https://www.linkedin.com/in/anatoliy-daniliuk-5006a819a/"
          target="_blank"
          rel="noopener noreferrer"
          className=" justify-center items-center flex transition-all duration-500  hover:scale-[1.25]"
        >
          <img
            src={linkedin}
            alt="Linkeidn"
            width="100"
            height="100"
            className="size-[40px] max-sm:size-[32px]"
          />
        </a>
        <a
          href="https://github.com/Ne1rem"
          target="_blank"
          rel="noopener noreferrer"
          className=" justify-center items-center flex transition-all duration-500  hover:scale-[1.25]"
        >
          <img
            src={github}
            alt="Linkeidn"
            width="100"
            height="100"
            className="size-[40px] max-sm:size-[32px]"
          />
        </a>
        <a
          href="https://t.me/tolik_dnlk"
          target="_blank"
          rel="noopener noreferrer"
          className=" justify-center items-center flex transition-all duration-500  hover:scale-[1.25]"
        >
          <img
            src={telegram}
            alt="Linkeidn"
            width="100"
            height="100"
            className="size-[40px] max-sm:size-[32px]"
          />
        </a>
        <a
          href="https://www.instagram.com/tolik_danilyuk/"
          target="_blank"
          rel="noopener noreferrer"
          className=" justify-center items-center flex transition-all duration-500  hover:scale-[1.25]"
        >
          <img
            src={instagram}
            alt="Linkeidn"
            width="100"
            height="100"
            className="size-[40px] max-sm:size-[32px]"
          />
        </a>
      </div>
    </>
  );
}

export default ContactsLinks;
