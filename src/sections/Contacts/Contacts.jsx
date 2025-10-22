import { useState } from "react";
import linkedin from "/src/icons/linkedin.svg";
import github from "/src/icons/github.svg";
import telegram from "/src/icons/telegram.svg";
import instagram from "/src/icons/instagram.svg";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <section
      className="grid grid-cols-2 gap-6 transition-all duration-500 max-lg:grid-cols-1 max-sm:gap-[64px]"
      id="contacts"
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-4">
            <h4 className="font-normal text-[76px] leading-[100%] max-sm:text-[43px]">
              Let's Connect
            </h4>
            <div className="flex flex-col gap-2 max-sm:gap-3">
              <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
                Say hello at{" "}
                <a
                  href="mailto:anatolydanilyuk2002@gmail.com"
                  className="text-white border-b-[2px] border-button-bg"
                >
                  anatolydanilyuk2002@gmail.com
                </a>
              </p>
              <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
                For more info,here's my{" "}
                <a
                  href="/public/CV_Daniliuk_FrontEnd.pdf"
                  download={true}
                  className="text-white border-b-[2px] border-button-bg"
                >
                  resume
                </a>
              </p>
            </div>
          </div>
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
        </div>
        <p
          className="font-medium font-manrope
        text-[16px] leading-[160%] max-lg:hidden"
        >
          © 2025 Daniliuk Anatoliy
        </p>
      </div>
      <div className="flex flex-col max-lg:gap-[80px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="font-manrope font-medium text-[16px] leading-[160%] pb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Dwayne Johnson"
              className="flex flex-row border-box gap-[10px] py-3 px-4 items-start bg-[#1a1a1a] radius-[4px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-manrope font-medium text-[16px] leading-[160%] pb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex flex-row border-box gap-[10px] py-3 px-4 items-start bg-[#1a1a1a] radius-[4px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-manrope font-medium text-[16px] leading-[160%] pb-2">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="flex flex-row border-box gap-[10px] py-3 px-4 items-start bg-[#1a1a1a] radius-[4px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-manrope font-medium text-[16px] leading-[160%] pb-2">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="flex flex-row border-box gap-[10px] py-3 px-4 items-start bg-[#1a1a1a] radius-[4px]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 flex flex-row justify-center items-center p-[20px_40px] gap-4 bg-button-bg rounded-[100px] text-page-color font-manrope font-bold text-[16px] leading-[100%] uppercase max-w-[140px]"
          >
            Submit
          </button>
        </form>
        <p
          className="font-medium font-manrope
        text-[16px] leading-[160%] lg:hidden"
        >
          © 2025 Daniliuk Anatoliy
        </p>
      </div>
    </section>
  );
}

export default Contacts;
