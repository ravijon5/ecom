import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ToastAndroid,
} from "react-native";
import { theme } from "../utils/theme";
import RatingContainer from "../components/RatingContainer";
import RoundButton from "../components/RoundButton";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import { getPrice } from "../utils/helper_function";
import { CartContext } from "../store/cart-context";

function ProductDetailScreen({ route }) {
  const { addItemToCart } = useContext(CartContext);
  const product = route.params.product;

  const images = [product.image, product.image, product.image];

  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity != 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          horizontal
          data={images}
          keyExtractor={(item, index) => index}
          renderItem={({ itemData, index }) => (
            <Image
              source={{ uri: product.image }}
              style={styles.imageContainer}
              resizeMode="contain"
            />
          )}
        />
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <RatingContainer rating={product.rating} />
      </View>
      <Text style={styles.titleStyle}>{product.title}</Text>
      <View></View>
      <Text style={styles.priceStyle}>${product.price}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{product.description}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={{ flex: 1 }}>Quantity</Text>
        <RoundButton onPress={decrementQuantity}>
          <Ionicons name="remove" color="white" size={theme.spacing.m} />
        </RoundButton>
        <Text style={styles.quantityText}>{quantity}</Text>
        <RoundButton onPress={incrementQuantity}>
          <Ionicons name="add" color="white" size={theme.spacing.m} />
        </RoundButton>
      </View>
      <View style={styles.addToCartButtonStyle}>
        <RoundedButton
          onPress={() => {
            addItemToCart(product, quantity);
            ToastAndroid.show("Product added to cart", ToastAndroid.SHORT);
          }}
        >
          <View style={styles.addToCartChildrenStyle}>
            <Text style={styles.addToCartTextStyle}>
              ${getPrice(quantity * product.price)}
            </Text>
            <Text style={styles.addToCartTextStyle}>Add To Bag</Text>
          </View>
        </RoundedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: theme.spacing.m,
  },
  imageContainer: {
    height: 250,
    width: 150,
    marginRight: theme.spacing.s,
    backgroundColor: theme.colors.greyBackground,
  },
  titleStyle: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  priceStyle: {
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 5,
  },
  descriptionContainer: {
    padding: theme.spacing.s,
    borderRadius: theme.spacing.m,
    backgroundColor: theme.colors.greyBackground,
  },
  descriptionStyle: {
    fontSize: 12,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.greyBackground,
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    borderRadius: 50,
    marginVertical: theme.spacing.m,
  },
  quantityText: {
    marginHorizontal: theme.spacing.m,
  },
  addToCartButtonStyle: {
    position: "absolute",
    bottom: theme.spacing.m,
    width: "100%",
    alignSelf: "center",
  },
  addToCartChildrenStyle: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  addToCartTextStyle: {
    color: "white",
  },
});

export default ProductDetailScreen;
