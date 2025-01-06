import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden flex flex-col">
      <div className="flex flex-col">
        <button className="" onClick={toggleIsOpenMenu}>
          {isOpen ? (
            <MdOutlineClose className="w-7 h-7" />
          ) : (
            <RxHamburgerMenu className="w-7 h-7" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
