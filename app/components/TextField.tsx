import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";

interface TextFieldProps {
  placeholder: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  error?: string | null;
  obscureText?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  maxLength?: number;
}

const TextField: FC<TextFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  error,
  obscureText = false,
  keyboardType = "default",
  maxLength,
}) => {
  const [secureText, setSecureText] = useState(true);

  const onPress = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainerStyle}>
        <TextInput
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={{ flex: 1 }}
          secureTextEntry={obscureText && secureText}
        />
        {obscureText && (
          <Pressable onPress={onPress}>
            <Ionicons
              name={secureText ? "eye-off" : "eye"}
              size={20}
              color={theme.colors.primaryIcon}
            />
          </Pressable>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.m,
  },
  textInputContainerStyle: {
    backgroundColor: theme.colors.greyBackground,
    padding: theme.spacing.s,

    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
  },
  errorText: {
    color: theme.colors.failure,
    fontSize: theme.fontSize.s,
  },
});

export default TextField;
