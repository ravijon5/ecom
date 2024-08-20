import { View, Text, StyleSheet, TextStyle } from "react-native";
import { theme } from "../utils/theme";
import SeeAllButton from "./SeeAllButton";

interface ListHeaderProps {
  text: string;
  onPress: () => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({ text, onPress }) => {
  return (
    <View style={styles.headerStyle}>
      <Text
        style={[theme.textVariants.subHeaderBold as TextStyle, { flex: 1 }]}
      >
        {text}
      </Text>
      <SeeAllButton onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: theme.spacing.s,
  },
});

export default ListHeader;
