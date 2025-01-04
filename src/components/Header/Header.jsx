import BtnSignUp from "./BtnSignUp";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import Basket from "./Basket";
import LocationNumber from "./LocationNumber";

const Header = () => {
  return (
    <header className="my-7">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex gap-10 justify-between items-center">
          {/* Кнопка USER */}
          <BtnSignUp />
          {/* Локация и номер телефона */}
          <LocationNumber />
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
