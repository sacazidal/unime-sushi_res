import { menuItems } from "../constants/Index";
import { scroller } from "react-scroll";

const Navbar = () => {
  const handleScrollTo = (id) => {
    const scrollToElement = () => {
      const targetElement = document.getElementById(id);

      if (targetElement) {
        scroller.scrollTo(id, {
          duration: 1500,
          smooth: true,
          offset: -80,
        });
      } else {
        setTimeout(scrollToElement, 100);
      }
    };

    scrollToElement();
  };

  return (
    <nav>
      <ul className="hidden lg:flex items-center justify-between border-t-2 max-w-screen-xl mx-auto px-4 xl:px-0">
        {menuItems.map((item) => (
          <li
            className="font-montserrat font-semibold text-base "
            key={item.id}
          >
            <button
              onClick={() =>
                handleScrollTo(
                  item.title
                    .toLocaleLowerCase()
                    .replace(/\s+/g, "-"),
                )
              }
              className="hover:text-zinc-500 active:border-t-2 active:border-orange-600 py-6"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
