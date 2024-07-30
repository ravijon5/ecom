import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import { Routes } from "../utils/route_constants";

import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppBar from "./AppBar";
import { theme } from "../utils/theme";

const Stack = createNativeStackNavigator();

function CartStackNavigator({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === Routes.CHECKOUT) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          header: ({ navigation, route, options }) =>
            route.name === Routes.CART ? (
              <View></View>
            ) : (
              <AppBar
                route={route}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
        }}
      >
        <Stack.Screen name={Routes.CART} component={CartScreen} />
        <Stack.Screen name={Routes.CHECKOUT} component={CheckoutScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

export default CartStackNavigator;
