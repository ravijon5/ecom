import { createContext, ReactNode, FC } from "react";
import { useState } from "react";
import { User } from "../model/user";

interface UserContextType {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  addUser: (user) => {},
  removeUser: () => {},
});

const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const addUser = (user: User) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const value = {
    user: user,
    addUser: addUser,
    removeUser: removeUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
