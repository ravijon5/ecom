import { useContext } from "react";
import { UserContext } from "../store/user-context";
import BottomNavigator from "../components/BottomNavigator";
import LoginScreen from "./LoginScreen";

function Screen() {
  const { user } = useContext(UserContext);
  return user ? <BottomNavigator /> : <LoginScreen />;
}

export default Screen;
