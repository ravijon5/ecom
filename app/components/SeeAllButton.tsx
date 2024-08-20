import { View, Text, Pressable } from "react-native";
import { theme } from "../utils/theme";
import { VoidFunctionProps } from "../model/function_props";

const SeeAllButton: React.FC<VoidFunctionProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={theme.textVariants.subHeader}>See All</Text>
    </Pressable>
  );
};

export default SeeAllButton;
