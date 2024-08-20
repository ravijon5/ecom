import { createContext, FC, ReactNode, useState } from "react";
import { CartProduct } from "../model/cart_product";
import { Product } from "../model/product";

interface CartContextType {
  cartProducts: CartProduct[];
  getQuantity: () => number;
  getTotal: () => number;
  addItemToCart: (product: Product, quantity: number) => void;
  removeItemFromCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartProducts: [],
  getQuantity: () => 0,
  getTotal: () => 0,
  addItemToCart: (product: Product, quantity: number) => {},
  removeItemFromCart: (product: Product, quantity: number) => {},
  removeFromCart: (id: number) => {},
  clearCart: () => {},
});

const CartContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const getQuantity = () => {
    let count = 0;
    products.map((e: CartProduct) => {
      count += e.quantity;
    });
    return count;
  };

  const getTotal = () => {
    let total = 0;
    products.map((e: CartProduct) => {
      total += e.quantity * e.product.price;
    });
    return total;
  };

  const addItemToCart = (product: Product, quantity: number) => {
    const productIndex = products.findIndex(
      (item: CartProduct) => item.product.id === product.id
    );

    if (productIndex !== -1) {
      const updatedProducts = [...products] as CartProduct[];

      updatedProducts[productIndex].quantity += quantity;
      setProducts(updatedProducts);
    } else {
      setProducts((products: CartProduct[]) => [
        ...products,
        { product: product, quantity: quantity },
      ]);
    }
  };

  const removeItemFromCart = (product: Product, quantity: number) => {
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
  };

  const removeFromCart = (id: number) => {
    setProducts((products) =>
      products.filter((item) => item.product.id !== id)
    );
  };

  const clearCart = () => {
    setProducts([]);
  };

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
};

export default CartContextProvider;
