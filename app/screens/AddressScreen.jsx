import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { ADD_ADDRESS } from "../utils/route_constants";

function AddressScreen({ navigation }) {
  function onPress() {
    navigation.navigate(ADD_ADDRESS);
  }

  return (
    <View style={styles.container}>
      <Text>Address</Text>
      <FAB style={styles.fab} icon="plus" onPress={onPress} />
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
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddressScreen;
