import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContext } from "../store/favorites-context";
import { useContext } from "react";
import { Product } from "../model/product";

interface ProductContainerProps {
  product: Product;
  onPress: () => void;
}

const ProductContainer: React.FC<ProductContainerProps> = ({
  product,
  onPress,
}) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const favoritesHandler = () => {
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.imageStyle} />
      <Pressable style={styles.iconContainer} onPress={favoritesHandler}>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color={theme.colors.primaryIcon}
        />
      </Pressable>

      <Text numberOfLines={1} ellipsizeMode="tail">
        {product.title}
      </Text>
      <Text style={styles.priceStyle}>${product.price}</Text>
    </Pressable>
  );
};

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.spacing.s,
    backgroundColor: theme.colors.greyBackground,
    height: height * 0.25,
    width: width * 0.44,
    margin: 0,
    overflow: "hidden",
    padding: 5,
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    resizeMode: "center",
  },
  iconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 2,
    borderRadius: 30,
    backgroundColor: theme.colors.primaryLight,
  },
  priceStyle: {
    fontWeight: "bold",
  },
});

export default ProductContainer;
