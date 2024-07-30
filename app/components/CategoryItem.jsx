import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { theme } from "../utils/theme";

function CategoryItem({ imageUrl, text, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            height={60}
            width={60}
            style={styles.imageStyle}
          />
        </View>

        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: theme.spacing.m,
    width: 60,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    //elevation: 10,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  imageStyle: {
    borderRadius: 20,
    resizeMode: "contain",
  },
  textStyle: {
    textAlign: "center",
    fontSize: theme.fontSize.s,
  },
});

export default CategoryItem;
