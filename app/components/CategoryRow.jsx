import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { theme } from "../utils/theme";

function CategoryRow({imageUrl, text, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Image 
                    source={{uri: imageUrl}}
                    style={styles.imageContainer}
                />
                <Text>{text}</Text>
            </View>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: theme.colors.greyBackground,
        borderRadius: 8,
        marginVertical: 5,
        alignItems: 'center'
    },
    imageContainer: {
        marginRight: 15,
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
});

export default CategoryRow;