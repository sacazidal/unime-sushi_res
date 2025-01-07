import Left from "../components/LeftPartCart/Left";
import Right from "../components/RightPartCart/Right";

const Cart = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 my-12 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-14">
      <Left />
      <Right />
    </div>
  );
};

export default Cart;
