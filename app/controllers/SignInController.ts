import { useState } from "react";
import { signIn } from "../services/SignInService";
import { validateEmail, validatePassword } from "../utils/validators";
import { SignInProps } from "../model/sign_in_props";
import { User } from "../model/user";

const useSignInController = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [emailErrorText, setEmailErrorText] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [passwordErrorText, setPasswordErrorText] = useState<
    string | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const onEmailChange = (value: string | undefined) => {
    setEmail(value);
    setEmailErrorText(validateEmail(value));
  };

  const onPasswordChange = (value: string) => {
    setPassword(value);
    setPasswordErrorText(validatePassword(value));
  };

  const onSignIn = async () => {
    setIsLoading(true);
    try {
      const user: User = await signIn({ email: email!, password: password! });
      return user;
    } catch (error: any) {
      setError((error as Error).message);
      setIsLoading(false);
    }
  };

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
