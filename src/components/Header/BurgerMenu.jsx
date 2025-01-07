import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import BtnFooter from "../BtnFooter";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const BurgerMenu = ({ isOpen, toggleIsOpenMenu }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden flex flex-col relative">
      <div className="flex flex-col relative">
        <button className="z-50" onClick={toggleIsOpenMenu}>
          {isOpen ? (
            <MdOutlineClose className="w-7 h-7 fixed top-3 z-30" />
          ) : (
            <RxHamburgerMenu className="w-7 h-7" />
          )}
        </button>
        {/* Оверлей */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
            onClick={toggleIsOpenMenu}
          ></div>
        )}

        {/* Меню */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center gap-2 h-screen justify-center">
            <BtnFooter
              id="роллы"
              title="Роллы"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="запеченные-роллы"
              title="Запеченные роллы"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="горячие-роллы"
              title="Горячие роллы"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="сеты"
              title="Сеты"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="закуски"
              title="Закуски"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="вок"
              title="Вок"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="пицца"
              title="Пицца"
              onClick={toggleIsOpenMenu}
            />
            <BtnFooter
              id="напитки"
              title="Напитки"
              onClick={toggleIsOpenMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
