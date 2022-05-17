import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, cantidad }]);
  };

  const deleteItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const limpiarCart = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  /// Precio acumulado por producto
  const PrecioAcumItem = (id) => {
    const buscarItem = cartList.find((item) => item.id === id);
    return buscarItem ? buscarItem.cantidad * buscarItem.precio : 0;
  }

  /// Precio acumulado del carrito
  const totalAcum = () => {
    return cartList.reduce(
      (total, item) => total + item.cantidad * item.precio,
      0
    );
  };

  //  Items que tengo por producto
  const unidadesItem = (id) => {
    const buscarItem = cartList.find((item) => item.id === id);
    return buscarItem ? buscarItem.cantidad : 0;
  };

  // Acumulado de Items que tengo en el carrito
  const totalAcumItem = () => {
    return cartList.reduce((total, item) => total + item.cantidad, 0);
  };



  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteItem,
        limpiarCart,
        isInCart,
        PrecioAcumItem,
        unidadesItem,
        totalAcum,
        totalAcumItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
