import { createContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [],
  getQuantity: () => {},
  getTotal: () => {},
  addItemToCart: (product, quantity) => {},
  removeItemFromCart: (product, quantity) => {},
  removeFromCart: (product, quantity) => {},
  clearCart: () => {},
});

function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  function getQuantity() {
    let count = 0;
    products.map((e) => {
      count += e.quantity;
    });
    return count;
  }

  function getTotal() {
    let total = 0;
    products.map((e) => {
      total += e.quantity * e.product.price;
    });
    return total;
  }

  function addItemToCart(product, quantity) {
    const productIndex = products.findIndex(
      (item) => item.product.id === product.id
    );

    if (productIndex !== -1) {
      const updatedProducts = [...products];

      updatedProducts[productIndex].quantity += quantity;
      setProducts(updatedProducts);
    } else {
      setProducts((products) => [
        ...products,
        { product: product, quantity: quantity },
      ]);
    }
  }

  function removeItemFromCart(product, quantity) {
    const productIndex = products.findIndex(
      (item) => item.product.id === product.id
    );

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      const updatedQuantity = updatedProducts[productIndex].quantity - quantity;
      if (updatedQuantity === 0) {
        removeFromCart(updatedProducts[productIndex].product.id);
      } else {
        updatedProducts[productIndex].quantity -= quantity;
        setProducts(updatedProducts);
      }
    }
  }

  function removeFromCart(id) {
    setProducts((products) =>
      products.filter((item) => item.product.id !== id)
    );
  }

  function clearCart() {
    setProducts([]);
  }

  const value = {
    cartProducts: products,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    removeFromCart: removeFromCart,
    getQuantity: getQuantity,
    clearCart: clearCart,
    getTotal: getTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
