import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { FAVORITES, PROFILE } from "../utils/route_constants";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AppBar from "./AppBar";

const Stack = createNativeStackNavigator();

function ProfileStackNavigator({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === FAVORITES) {
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
            route.name === PROFILE ? (
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
        <Stack.Screen name={PROFILE} component={ProfileScreen} />
        <Stack.Screen name={FAVORITES} component={FavoritesScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ProfileStackNavigator;
