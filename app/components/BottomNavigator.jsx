import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  NOTIFICATION,
  HOME_STACK,
  CART_STACK,
  PROFILE_STACK,
  PROFILE,
} from "../utils/route_constants";
import NotificationScreen from "../screens/NotificationScreen";
import { theme } from "../utils/theme";
import { View, Text } from "react-native";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import ProfileScreen from "../screens/ProfileScreen";

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
          name={HOME_STACK}
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name={NOTIFICATION}
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
          name={CART_STACK}
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
                      color: "white",
                      fontSize: 8,
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
          name={PROFILE_STACK}
          component={ProfileStackNavigator}
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
