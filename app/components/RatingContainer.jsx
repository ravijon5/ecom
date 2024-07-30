import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../utils/theme";

function RatingContainer({ rating }) {
  return (
    <View style={styles.container}>
      <Text style={styles.ratingText}>{rating.rate}</Text>
      <Ionicons
        name="star"
        color={theme.colors.primaryIcon}
        style={{ marginRight: 10, marginLeft: 2 }}
      />
      <Text style={styles.ratingText}>{rating.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: theme.colors.primaryLight,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  ratingText: {
    fontSize: theme.fontSize.s,
  },
});

export default RatingContainer;
