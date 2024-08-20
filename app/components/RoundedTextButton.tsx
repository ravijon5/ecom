import { theme } from "../utils/theme";
import RoundedButton from "./RoundedButton";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface RoundedTextButtonProps {
  text: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const RoundedTextButton: React.FC<RoundedTextButtonProps> = ({
  text,
  onPress,
  style,
  isDisabled,
}) => {
  return (
    <RoundedButton
      style={style}
      onPress={onPress}
      isDisabled={isDisabled ?? false}
    >
      <View style={styles.container}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </RoundedButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    color: theme.colors.background,
  },
});

export default RoundedTextButton;
