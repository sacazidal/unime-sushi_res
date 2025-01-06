import { FaRegUser } from "react-icons/fa";

const BtnSignUp = () => {
  return (
    <button className="hidden md:flex items-center gap-2 py-3 px-5 border-2 rounded-xl border-orange-600">
      <div className="">
        <FaRegUser />
      </div>
      <div className="font-montserrat font-medium text-base">
        Вход
      </div>
    </button>
  );
};

export default BtnSignUp;
