import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { theme } from "../utils/theme";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import CartProduct from "../components/CartProduct";
import { CART } from "../utils/image_constant";
import RoundButton from "../components/RoundButton";
import RoundedButton from "../components/RoundedButton";

function CartScreen() {
  const { cartProducts, clearCart, getQuantity } = useContext(CartContext);
  return getQuantity() === 0 ? (
    <View style={styles.centerContainer}>
      <Image
        source={require("../../assets/parcel.png")}
        height={100}
        width={100}
      />
      <Text style={styles.textStyle}>Your Cart is Empty</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>Cart</Text>
      <Pressable
        style={{ alignSelf: "flex-end", marginVertical: theme.spacing.s }}
        onPress={clearCart}
      >
        <Text>Remove All</Text>
      </Pressable>
      <FlatList
        data={cartProducts}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <CartProduct product={item.product} quantity={item.quantity} />
        )}
      />
      <Text>Subtotal</Text>
      <Text>Shipping Cost</Text>
      <Text>Tax</Text>
      <Text>Total</Text>
      <View style={styles.textInputContainerStyle}>
        <Image source={require("../../assets/discount.png")} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Discount Here"
        />
        <RoundButton>
          <Ionicons name="chevron-forward" color="white" size={20} />
        </RoundButton>
      </View>

      <RoundedButton>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={styles.checkoutButtonTextStyle}>Checkout</Text>
        </View>
      </RoundedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: "white",
  },
  headerTextStyle: {
    marginTop: theme.spacing.m,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: theme.spacing.s,
  },
  textInputContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.s,
    backgroundColor: theme.colors.greyBackground,
    borderRadius: 5,
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.l,
  },
  textInputStyle: {
    flex: 1,
    marginLeft: theme.spacing.s,
  },
  checkoutButtonTextStyle: {
    color: "white",
    fontSize: theme.textVariants.body.fontSize,
  },
});

export default CartScreen;
