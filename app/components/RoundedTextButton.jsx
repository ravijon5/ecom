import RoundedButton from "./RoundedButton";
import { View, Text, StyleSheet } from "react-native";

function RoundedTextButton({ text, onPress, style, isDisabled }) {
  return (
    <RoundedButton style={style} onPress={onPress} isDisabled={isDisabled}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </RoundedButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
  },
});

export default RoundedTextButton;
