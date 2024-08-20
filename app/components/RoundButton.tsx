import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../utils/theme";
import { VoidFunctionProps } from "../model/function_props";
import { FC } from "react";

interface RoundButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.s,
    borderRadius: 50,
  },
});

export default RoundButton;
