import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import SeeAllButton from "./SeeAllButton";

function ListHeader({ text, onPress }) {
  return (
    <View style={styles.headerStyle}>
      <Text style={[theme.textVariants.subHeaderBold, { flex: 1 }]}>
        {text}
      </Text>
      <SeeAllButton onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: theme.spacing.s,
  },
});

export default ListHeader;
