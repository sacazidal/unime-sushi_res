import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (
    itemId,
    quantity,
    price,
    title,
    itemImg,
    weigth,
  ) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        quantity:
          (prevCart[itemId]?.quantity || 0) + quantity,
        price: price,
        title: title,
        itemImg: itemImg,
        weigth: weigth,
      },
    }));
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        ...prevCart[itemId],
        quantity: prevCart[itemId].quantity + 1,
      },
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        ...prevCart[itemId],
        quantity: Math.max(
          prevCart[itemId].quantity - 1,
          1,
        ),
      },
    }));
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[itemId];
      return newCart;
    });
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
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
