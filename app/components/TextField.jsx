import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import { theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function TextField({
  placeholder,
  value,
  onChangeText,
  error,
  obscureText = false,
  keyboardType = "default",
  maxLength,
}) {
  const [secureText, setSecureText] = useState(true);

  function onPress() {
    setSecureText(!secureText);
  }

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
              color={theme.colors.primary}
            />
          </Pressable>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

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
    color: "red",
    fontSize: 12,
  },
});

export default TextField;
