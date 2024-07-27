import CartContextProvider from "./app/store/cart-context.js";
import BottomNavigator from "./app/components/BottomNavigator.jsx";
import UserContextProvider from "./app/store/user-context.js";
import Screen from "./app/screens/Screen.jsx";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Screen />
      </CartContextProvider>
    </UserContextProvider>
  );
}
