import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CheckoutScreen;
