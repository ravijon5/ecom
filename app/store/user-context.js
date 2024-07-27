import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
  user: {},
  addUser: (user) => {},
  removeUser: () => {},
});

function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  function addUser(user) {
    setUser(user);
  }

  function removeUser() {
    setUser();
  }

  const value = {
    user: user,
    addUser: addUser,
    removeUser: removeUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
