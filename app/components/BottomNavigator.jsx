import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import NotificationScreen from "../screens/NotificationScreen";
import { theme } from "../utils/theme";
import { View, Text } from "react-native";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import { Routes } from "../utils/route_constants";

const BottomTab = createBottomTabNavigator();

function BottomNavigator() {
  const { getQuantity } = useContext(CartContext);

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          header: ({ navigation, route, options }) => {},
          tabBarLabel: "",
          tabBarActiveTintColor: theme.colors.primary,
        }}
      >
        <BottomTab.Screen
          name={Routes.HOME_BOTTOM_TAB}
          component={HomeStackNavigator}
          initialParams={{ initialRouteName: Routes.HOME }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.NOTIFICATION}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="notifications-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.CART_STACK}
          component={CartStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <View>
                <Ionicons name="cart-outline" color={color} size={size} />

                {getQuantity() > 0 && (
                  <Text
                    style={{
                      position: "absolute",
                      right: -5,
                      paddingVertical: 2,
                      paddingHorizontal: 5,
                      backgroundColor: theme.colors.primary,
                      borderRadius: 20,
                      color: theme.colors.background,
                      fontSize: theme.fontSize.xs,
                    }}
                  >
                    {getQuantity()}
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.PROFILE_BOTTOM_TAB}
          initialParams={{ initialRouteName: Routes.PROFILE }}
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigator;
