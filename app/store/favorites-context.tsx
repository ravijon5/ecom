import { createContext, FC, ReactNode, useState } from "react";
import { Product } from "../model/product";

interface FavoritesContextType {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: (product: Product) => {},
  removeFavorite: (id: number) => {},
});

const FavoritesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const addFavorite = (product: Product) => {
    setFavoriteProducts((favorites) => [...favorites, product]);
  };

  const removeFavorite = (id: number) => {
    setFavoriteProducts((favorites) =>
      favorites.filter((product) => product.id !== id)
    );
  };

  const value = {
    favorites: favoriteProducts,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextProvider };
