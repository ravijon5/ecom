import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { NOTIFICATION, STACK, PROFILE, CART } from "../utils/route_constants";
import NotificationScreen from "../screens/NotificationScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { theme } from "../utils/theme";
import StackNavigator from "./StackNavigator";
import { View, Text } from "react-native";

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
          name={STACK}
          component={StackNavigator}
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
          name={CART}
          component={CartScreen}
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
          name={PROFILE}
          component={ProfileScreen}
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
