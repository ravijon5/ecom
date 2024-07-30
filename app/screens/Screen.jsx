import { useContext } from "react";
import { UserContext } from "../store/user-context";
import BottomNavigator from "../components/BottomNavigator";
import SignInScreen from "./SignInScreen";

function Screen() {
  const { user } = useContext(UserContext);
  return user ? <BottomNavigator /> : <SignInScreen />;
}

export default Screen;
