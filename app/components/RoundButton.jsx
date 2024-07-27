import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../utils/theme";

function RoundButton({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.s,
    borderRadius: 50,
  },
});

export default RoundButton;
