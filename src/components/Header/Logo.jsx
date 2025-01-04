import LogoIcon from "/img/faivicon.svg";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="">
        <img src={LogoIcon} alt="logo" />
      </div>
      <div className="">
        <h1 className="font-montserrat font-bold text-4xl text-black">
          УНИМЭ СУШИ
        </h1>
      </div>
    </div>
  );
};

export default Logo;
