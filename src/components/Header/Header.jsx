import Navigation from "./Navigation";

function Header() {
  return (
    <div className="py-6 px-[60px] flex justify-between items-center max-sm:px-[16px]">
      <a
        href="/"
        className="text-4xl font-medium no-underline duration-500 text-primary-color hover:text-button-bg max-sm:font-normal max-sm:text-[28px] max-sm:leading-[100%] transition-all"
      >
        Daniliuk Anatoliy
      </a>
      <Navigation />
    </div>
  );
}

export default Header;
