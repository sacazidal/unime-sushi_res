import { scroller } from "react-scroll";

// eslint-disable-next-line react/prop-types
const BtnFooter = ({ id, title }) => {
  const handleScrollTo = (id) => {
    const scrollToElement = () => {
      const targetElement = document.getElementById(id);

      if (targetElement) {
        scroller.scrollTo(id, {
          duration: 500,
          smooth: true,
          //offset: -100,
        });
      } else {
        setTimeout(scrollToElement, 100);
      }
    };

    scrollToElement();
  };

  return (
    <button
      className="font-montserrat font-semibold text-sm lg:text-base"
      onClick={() => handleScrollTo(id)}
    >
      {title}
    </button>
  );
};

export default BtnFooter;
