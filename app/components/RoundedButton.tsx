import { StyleSheet, Pressable, StyleProp, ViewStyle } from "react-native";
import { theme } from "../utils/theme";

interface RoundedButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  onPress,
  style,
  isDisabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
      disabled={isDisabled}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: theme.spacing.m,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
  },
});

export default RoundedButton;
