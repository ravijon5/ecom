import { useState } from "react";
import { signIn } from "../services/SignInService";
import { validateEmail, validatePassword } from "../utils/validators";

const useSignInController = () => {
  const [email, setEmail] = useState();
  const [emailErrorText, setEmailErrorText] = useState();
  const [password, setPassword] = useState();
  const [passwordErrorText, setPasswordErrorText] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function onEmailChange(value) {
    setEmail(value);
    setEmailErrorText(validateEmail(value));
  }

  function onPasswordChange(value) {
    setPassword(value);
    setPasswordErrorText(validatePassword(value));
  }

  async function onSignIn() {
    setIsLoading(true);
    try {
      const user = await signIn({ email: email, password: password });
      return user;
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  }

  return {
    email,
    password,
    isLoading,
    error,
    emailErrorText,
    passwordErrorText,
    onEmailChange,
    onPasswordChange,
    onSignIn,
  };
};

export default useSignInController;
