import { View, Text, Pressable } from "react-native";
import { theme } from "../utils/theme";

function SeeAllButton({onPress}) {
    return (
        <Pressable onPress={onPress}>
            <Text style={theme.textVariants.subHeader}>See All</Text>
        </Pressable>
    )
}

export default SeeAllButton;