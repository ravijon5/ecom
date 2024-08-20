import { View, Text, StyleSheet, Image } from "react-native";
import { theme } from "../utils/theme";
import RoundButton from "./RoundButton";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { getPrice } from "../utils/helper_functions";
import { Product } from "../model/product";

interface CartProductContainerProps {
  product: Product;
  quantity: number;
}

const CartProduct: React.FC<CartProductContainerProps> = ({
  product,
  quantity,
}) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(product, 1);
  };

  const removeItemHandler = () => {
    removeItemFromCart(product, 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} width={60} />

      <View style={styles.descriptionContainer}>
        <Text>{product.title}</Text>
        <View style={styles.quantityContainer}>
          <RoundButton onPress={removeItemHandler}>
            <Ionicons name="remove" color={theme.colors.whiteIcon} />
          </RoundButton>
          <Text style={styles.quantityStyle}>{quantity}</Text>
          <RoundButton onPress={addItemHandler}>
            <Ionicons name="add" color={theme.colors.whiteIcon} />
          </RoundButton>
        </View>
      </View>

      <Text style={styles.priceStyle}>
        ${getPrice((product.price * quantity).toString())}
      </Text>
    </View>
  );
};

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
