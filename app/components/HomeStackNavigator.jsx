import { View, StyleSheet } from "react-native";

import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppBar from "./AppBar";
import HomeScreen from "../screens/HomeScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HOME,
  ALL_CATEGORIES,
  PRODUCTS,
  PRODUCT_DETAIL,
} from "../utils/route_constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

function HomeStackNavigator({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === ALL_CATEGORIES ||
      routeName === PRODUCT_DETAIL ||
      routeName === PRODUCTS
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => {
          if (route.name === HOME) {
            return {
              header: () => <View></View>,
            };
          } else {
            return {
              header: () => (
                <AppBar
                  route={route}
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            };
          }
        }}
      >
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={ALL_CATEGORIES} component={AllCategoriesScreen} />
        <Stack.Screen name={PRODUCTS} component={ProductsScreen} />
        <Stack.Screen name={PRODUCT_DETAIL} component={ProductDetailScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});

export default HomeStackNavigator;
