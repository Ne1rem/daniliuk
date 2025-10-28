import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactsLinks from "../../components/ContactsLinks/ContactsLinks";
import Title from "../../components/Title/Title";

function Contacts() {
  return (
    <section
      className="grid grid-cols-2 gap-6 transition-all duration-500 max-lg:grid-cols-1 max-sm:gap-[64px]"
      id="contacts"
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-4">
            <Title name="Let's Connect" />
            <div className="flex flex-col gap-2 max-sm:gap-3">
              <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
                Say hello at
                <a
                  href="mailto:anatolydanilyuk2002@gmail.com"
                  className="text-white border-b-[2px] border-button-bg"
                >
                  anatolydanilyuk2002@gmail.com
                </a>
              </p>
              <p className="font-manrope font-normal text-[18px] leading-[150%] text-primary-color">
                For more info,here's my
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
          <ContactsLinks />
        </div>
        <p
          className="font-medium font-manrope
        text-[16px] leading-[160%] max-lg:hidden"
        >
          © 2025 Daniliuk Anatoliy
        </p>
      </div>
      <div className="flex flex-col max-lg:gap-[80px]">
        <ContactsForm />
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
