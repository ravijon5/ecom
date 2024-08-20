import { View, Text, StyleSheet, Image } from "react-native";
import { theme } from "../utils/theme";

const NotificationScreen: React.FC = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  textStyle: {
    fontSize: theme.fontSize.l,
    fontWeight: "bold",
    marginTop: theme.spacing.s,
  },
});

export default NotificationScreen;
