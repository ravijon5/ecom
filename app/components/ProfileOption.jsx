import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";

function ProfileOption({ text }) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Ionicons name="chevron-forward" size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.greyBackground,
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
});

export default ProfileOption;
