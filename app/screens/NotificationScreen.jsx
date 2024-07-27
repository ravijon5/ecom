import { View, Text, StyleSheet, Image } from "react-native";
import { NOTIFICATION } from "../utils/route_constants";
import { IMG_NOTIFICATION } from "../utils/image_constant";
import { theme } from "../utils/theme";

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets//bell.png")}
        height={100}
        width={100}
      />
      <Text style={styles.textStyle}>No Notification yet</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    marginTop: theme.spacing.s,
  },
});

export default NotificationScreen;
