import {
  View,
  StyleSheet,
  Text,
  ToastAndroid,
  ActivityIndicator,
  Keyboard,
  TextStyle,
} from "react-native";
import { theme } from "../utils/theme";
import RoundedTextButton from "../components/RoundedTextButton";
import TextField from "../components/TextField";
import useSignInController from "../controllers/SignInController";
import { useContext, useEffect } from "react";
import { UserContext } from "../store/user-context";

const SignInScreen: React.FC = () => {
  const {
    email,
    password,
    emailErrorText,
    passwordErrorText,
    onEmailChange,
    onPasswordChange,
    isLoading,
    error,
    onSignIn,
  } = useSignInController();

  const isFormValid = emailErrorText === null && passwordErrorText === null;

  const { addUser } = useContext(UserContext);

  const signIn = async () => {
    Keyboard.dismiss();
    const user = await onSignIn();
    if (user) {
      addUser(user);
    }
  };

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }, [error]);

  console.log("is form valid: ", isFormValid);

  return (
    <View style={styles.container}>
      <Text
        style={[
          theme.textVariants.headerBold as TextStyle,
          styles.headerMargin,
        ]}
      >
        Sign In
      </Text>
      <TextField
        placeholder="Email Address"
        value={email}
        onChangeText={onEmailChange}
        error={emailErrorText}
      />
      <TextField
        placeholder="Password"
        value={password}
        onChangeText={onPasswordChange}
        error={passwordErrorText}
        obscureText={true}
      />
      {isLoading ? (
        <ActivityIndicator color={theme.colors.primary} size="large" />
      ) : (
        <RoundedTextButton
          text="Continue"
          style={
            isFormValid
              ? undefined
              : { backgroundColor: theme.colors.primaryLight }
          }
          isDisabled={!isFormValid}
          onPress={signIn}
        />
      )}
      <Text style={styles.signUpTextStyle}>
        Don't have an Account? <Text style={styles.boldText}>Create One</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
    justifyContent: "center",
  },
  headerMargin: {
    marginBottom: theme.spacing.m,
  },
  signUpTextStyle: {
    fontSize: theme.fontSize.s,
    marginTop: theme.spacing.m,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default SignInScreen;
