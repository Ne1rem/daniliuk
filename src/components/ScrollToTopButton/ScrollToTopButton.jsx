import { animateScroll as scroll } from "react-scroll";
import arrowUp from "/src/icons/arrow-up.svg";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 p-0 bg-transparent transition-all duration-500 hover:scale-[1.2] hover:bg-transparent
        ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }
      `}
    >
      <img
        src={arrowUp}
        alt="arrow up"
        width={100}
        height={100}
        className="w-[70px] h-[70px]"
      />
    </button>
  );
}

export default ScrollToTopButton;
