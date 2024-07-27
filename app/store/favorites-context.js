import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (product) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}){
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    function addFavorite(product){
        setFavoriteProducts((favorites) => [...favorites, product]);
    }

    function removeFavorite(id) {
        setFavoriteProducts((favorites) => favorites.filter((product) => product.id !== id));
    }

    const value = {
        favorites:favoriteProducts,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value = {value}>{children}</FavoritesContext.Provider>

}

export default FavoritesContextProvider;