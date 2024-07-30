import { USERS } from "../utils/users";

export const signIn = async ({ email, password }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const user = USERS.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return user;
  }
  throw new Error("User not found.");
};
