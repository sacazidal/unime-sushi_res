import { Link } from "react-router-dom";
import LogoIcon from "/img/icons/faivicon.svg";

const Logo = () => {
  return (
    <Link to={"/"}>
      <button className="flex gap-2 lg:gap-4 items-center">
        <div className="">
          <img
            src={LogoIcon}
            alt="logo"
            className="lg:w-[50px] lg:h-[42px] w-[36px] h-[28px]"
          />
        </div>
        <div className="">
          <h1 className="font-montserrat font-bold text-xl lg:text-4xl text-black tracking-tighter">
            УНИМЭ СУШИ
          </h1>
        </div>
      </button>
    </Link>
  );
};

export default Logo;
