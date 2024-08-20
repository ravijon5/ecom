import Screen from "./app/screens/Screen";
import CartContextProvider from "./app/store/cart-context";
import { FavoritesContextProvider } from "./app/store/favorites-context";
import { UserContextProvider } from "./app/store/user-context";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <FavoritesContextProvider>
          <Screen />
        </FavoritesContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default App;
