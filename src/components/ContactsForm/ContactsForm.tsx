import { useState } from "react";

function ContactsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
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
    <>
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
    </>
  );
}

export default ContactsForm;
