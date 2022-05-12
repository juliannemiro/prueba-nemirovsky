import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]);
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const unidadesItem = (id) => {
    const buscarItem = cartList.find((item) => item.id === id);
    return buscarItem ? buscarItem.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteItem,
        emptyCart,
        isInCart,
        unidadesItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
