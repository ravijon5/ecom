import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../utils/theme";

function RoundedButton({ children, onPress, style, isDisabled }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
      disabled={isDisabled}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.spacing.m,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
  },
});

export default RoundedButton;
