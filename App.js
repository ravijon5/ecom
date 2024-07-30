import CartContextProvider from "./app/store/cart-context.js";
import UserContextProvider from "./app/store/user-context.js";
import Screen from "./app/screens/Screen.jsx";
import FavoritesContextProvider from "./app/store/favorites-context.js";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <FavoritesContextProvider>
          <Screen />
        </FavoritesContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}
