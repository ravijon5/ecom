import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";

interface CostRowProps {
  text: string;
  cost: string;
}

const CostRow: React.FC<CostRowProps> = ({ text, cost }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <Text style={styles.costTextStyle}>${cost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textStyle: {
    color: theme.colors.greyText,
  },
  costTextStyle: {
    fontWeight: "bold",
  },
});

export default CostRow;
