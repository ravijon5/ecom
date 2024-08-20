import { useContext } from "react";
import { UserContext } from "../store/user-context";
import BottomNavigator from "../components/BottomNavigator";
import SignInScreen from "./SignInScreen";

const Screen: React.FC = () => {
  const { user } = useContext(UserContext);
  return user ? <BottomNavigator /> : <SignInScreen />;
};

export default Screen;
