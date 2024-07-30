import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../utils/theme";

import { SearchBar } from "react-native-screens";
import SearchField from "./SearchField";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import { toTitleCase } from "../utils/helper_function";
import { Routes } from "../utils/route_constants";

function AppBar({ onPress, route }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeAreaView style={styles.container}>
      {route.name === Routes.FAVORITES && favorites.length !== 0 ? (
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Favorites({favorites.length})</Text>
        </View>
      ) : route.name === Routes.ADDRESS || route.name === Routes.ADD_ADDRESS ? (
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>{toTitleCase(route.name)}</Text>
        </View>
      ) : (
        <View></View>
      )}
      <BackButton onPress={onPress} />
      {route.name === Routes.ALL_CATEGORIES ? (
        <View style={styles.searchContainer}>
          <SearchField />
        </View>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: theme.spacing.m,
    backgroundColor: theme.colors.background,
    //marginBottom: theme.spacing.s,
    alignItems: "center",
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.m,
  },
  headerContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 3,
    flex: 1,
  },
  textStyle: {
    flex: 1,
    textAlign: "center",
    fontSize: theme.fontSize.l,
    fontWeight: "bold",
  },
});

export default AppBar;
