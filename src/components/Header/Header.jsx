import BtnSignUp from "./BtnSignUp";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import Basket from "./Basket";
import LocationNumber from "./LocationNumber";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="my-3 md:my-7 px-4 xl:px-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex gap-10 justify-between items-center">
          {/* Кнопка USER */}
          <BtnSignUp />
          {/* Локация и номер телефона */}
          <LocationNumber />
          {/* Бургер меню */}
          <BurgerMenu
            isOpen={isOpen}
            toggleIsOpenMenu={toggleIsOpenMenu}
          />
        </div>
        {/* Лого */}
        <Logo />
        {/* Социальные сети */}
        <SocialLinks />
        {/* Корзина */}
        <Basket />
      </div>
    </header>
  );
};

export default Header;
