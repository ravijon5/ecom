import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../utils/theme";


function BackButton({onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Ionicons name="chevron-back" size={18} color="black" />
            </View>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
        backgroundColor: theme.colors.greyBackground,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BackButton;