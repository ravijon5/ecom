import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";

function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <Text>Checkout Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CheckoutScreen;
