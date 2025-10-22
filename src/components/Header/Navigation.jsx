import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu from "/src/icons/menu.svg";

function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    function widthHandler() {
      const width = window.innerWidth;
      if (width >= 641) {
        setOpenMenu(true);
      }
    }

    widthHandler();
    window.addEventListener("resize", widthHandler);

    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  }, []);

  return (
    <div className="relative">
      <img
        src={menu}
        alt="burgerMenu"
        onClick={showMenu}
        width={100}
        height={100}
        className={`
          ${
            openMenu
              ? "rotate-90 transition-all duration-500"
              : "transition-all duration-500"
          } 
          sm:hidden w-[30px] h-[30px] cursor-pointer z-50 fixed right-[16px] top-[22  px]
        `}
      />

      <nav
        className={`
          ${
            openMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } 
          sm:translate-x-0 sm:opacity-100
          fixed top-[80px] right-2 w-[20%] bg-color-projects-img text-white 
          flex flex-col items-center justify-center gap-8 text-2xl font-inter
          transition-all duration-500 ease-in-out rounded-2xl
          sm:static sm:flex-row sm:bg-transparent sm:text-black sm:w-auto sm:h-auto max-sm:text-[20px] max-sm:h-[150px]
        `}
      >
        <ul className="flex flex-col items-center gap-8 p-0 m-0 list-none sm:flex-row max-sm:gap-[12px]">
          <li>
            <Link
              smooth={true}
              duration={500}
              className="p-1 no-underline transition-colors duration-300 cursor-pointer hover:text-gray-400"
              to="projects"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={500}
              className="p-1 no-underline transition-colors duration-300 cursor-pointer hover:text-gray-400"
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={500}
              className="p-1 no-underline transition-colors duration-300 cursor-pointer hover:text-gray-400"
              to="contacts"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
