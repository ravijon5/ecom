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
import RoundButton from "../components/RoundButton";
import RoundedButton from "../components/RoundedButton";
import { Routes } from "../utils/route_constants";

import CostRow from "../components/CostRow";
import { getPrice } from "../utils/helper_functions";
import CartProduct from "../components/CartProductContainer";
import { useNavigation } from "@react-navigation/native";
import {
  BottomTabNavigationProps,
  CartStackNavigationProps,
} from "../utils/route_types";

const CartScreen: React.FC = () => {
  const navigation =
    useNavigation<CartStackNavigationProps<typeof Routes.CHECKOUT>>();

  const navigateToCheckout = () => {
    navigation.navigate(Routes.CHECKOUT);
  };

  const { cartProducts, clearCart, getQuantity, getTotal } =
    useContext(CartContext);
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CartProduct product={item.product} quantity={item.quantity} />
        )}
      />

      <CostRow text="Subtotal" cost={getPrice(getTotal().toString())} />
      <CostRow text="Shipping Cost" cost={"8"} />
      <CostRow text="Tax" cost={"0"} />
      <CostRow
        text="Total"
        cost={getPrice((getTotal() + 8).toString()).toString()}
      />

      <View style={styles.textInputContainerStyle}>
        <Image source={require("../../assets/discount.png")} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Discount Here"
        />
        <RoundButton>
          <Ionicons
            name="chevron-forward"
            color={theme.colors.whiteIcon}
            size={20}
          />
        </RoundButton>
      </View>

      <RoundedButton onPress={navigateToCheckout}>
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
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
  },
  headerTextStyle: {
    marginTop: theme.spacing.m,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: theme.fontSize.m,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: theme.fontSize.l,
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
    fontSize: theme.fontSize.m,
  },
});

export default CartScreen;
