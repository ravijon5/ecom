// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { View, Text, StyleSheet } from "react-native";
// import ProfileScreen from "../screens/ProfileScreen";
// import FavoritesScreen from "../screens/FavoritesScreen";
// import { Routes } from "../utils/route_constants";

// import { useLayoutEffect } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
// import AppBar from "./AppBar";
// import AddressScreen from "../screens/AddressScreen";
// import AddAddressScreen from "../screens/AddAddressScreen";
// import { theme } from "../utils/theme";

// const Stack = createNativeStackNavigator();

// function ProfileStackNavigator({ navigation, route }) {
//   useLayoutEffect(() => {
//     const routeName = getFocusedRouteNameFromRoute(route);
//     if (
//       routeName === Routes.FAVORITES ||
//       routeName === Routes.ADDRESS ||
//       routeName === Routes.ADD_ADDRESS
//     ) {
//       navigation.setOptions({ tabBarStyle: { display: "none" } });
//     } else {
//       navigation.setOptions({ tabBarStyle: { display: "flex" } });
//     }
//   }, [navigation, route]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack.Navigator
//         screenOptions={{
//           header: ({ navigation, route, options }) =>
//             route.name === Routes.PROFILE ? (
//               <View></View>
//             ) : (
//               <AppBar
//                 route={route}
//                 onPress={() => {
//                   navigation.goBack();
//                 }}
//               />
//             ),
//         }}
//       >
//         <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
//         <Stack.Screen name={Routes.FAVORITES} component={FavoritesScreen} />
//         <Stack.Screen name={Routes.ADDRESS} component={AddressScreen} />
//         <Stack.Screen name={Routes.ADD_ADDRESS} component={AddAddressScreen} />
//       </Stack.Navigator>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//   },
// });

// export default ProfileStackNavigator;
