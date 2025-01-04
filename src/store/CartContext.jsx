import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (itemId, quantity, price) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        quantity:
          (prevCart[itemId]?.quantity || 0) + quantity,
        price: price,
      },
    }));
  };

  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
