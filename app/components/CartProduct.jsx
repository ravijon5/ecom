import { View, Text, StyleSheet, Image } from "react-native";
import { theme } from "../utils/theme";
import { getPrice } from "../utils/helper_function";
import RoundButton from "./RoundButton";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

function CartProduct({ product, quantity }) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} width={60} />

      <View style={styles.descriptionContainer}>
        <Text>{product.title}</Text>
        <View style={styles.quantityContainer}>
          <RoundButton
            onPress={() => {
              removeItemFromCart(product, 1);
            }}
          >
            <Ionicons name="remove" color="white" />
          </RoundButton>
          <Text style={styles.quantityStyle}>{quantity}</Text>
          <RoundButton
            onPress={() => {
              addItemToCart(product, 1);
            }}
          >
            <Ionicons name="add" color="white" />
          </RoundButton>
        </View>
      </View>

      <Text style={styles.priceStyle}>
        ${getPrice(product.price * quantity)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.s,
    backgroundColor: theme.colors.greyBackground,
    flexDirection: "row",
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.s,
  },

  descriptionContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.s,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityStyle: {
    marginHorizontal: theme.spacing.s,
  },
  priceStyle: {
    fontWeight: "bold",
  },
});

export default CartProduct;
