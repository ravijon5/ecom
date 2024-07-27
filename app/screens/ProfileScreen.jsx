import { View, Text, StyleSheet } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default ProfileScreen;
