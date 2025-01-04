import { menuItems } from "../../constants/Index";
import { scroller } from "react-scroll";

const Navbar = () => {
  const handleScrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      //offset: -100,
    });
  };

  return (
    <nav>
      <ul className="flex items-center justify-between border-t-2">
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
