import { View, StyleSheet } from "react-native";

import { useLayoutEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppBar from "./AppBar";
import HomeScreen from "../screens/HomeScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "../utils/route_constants";

import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../utils/theme";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AddAddressScreen from "../screens/AddAddressScreen";
import AddressScreen from "../screens/AddressScreen";

const Stack = createNativeStackNavigator();

function HomeStackNavigator({ navigation, route }) {
  const initialRouteName = route.params.initialRouteName;
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === Routes.ALL_CATEGORIES ||
      routeName === Routes.PRODUCT_DETAIL ||
      routeName === Routes.PRODUCTS
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={({ navigation, route }) => {
          if (route.name === Routes.HOME || route.name === Routes.PROFILE) {
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
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen
          name={Routes.ALL_CATEGORIES}
          component={AllCategoriesScreen}
        />
        <Stack.Screen name={Routes.PRODUCTS} component={ProductsScreen} />
        <Stack.Screen
          name={Routes.PRODUCT_DETAIL}
          component={ProductDetailScreen}
        />

        <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={Routes.FAVORITES} component={FavoritesScreen} />
        <Stack.Screen name={Routes.ADDRESS} component={AddressScreen} />
        <Stack.Screen name={Routes.ADD_ADDRESS} component={AddAddressScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
});

export default HomeStackNavigator;
