import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../utils/theme";
import { ALL_CATEGORIES, FAVORITES } from "../utils/route_constants";
import { SearchBar } from "react-native-screens";
import SearchField from "./SearchField";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";

function AppBar({ onPress, route }) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={onPress} />
      {route.name === ALL_CATEGORIES ? (
        <View style={styles.searchContainer}>
          <SearchField />
        </View>
      ) : route.name === FAVORITES && favorites.length !== 0 ? (
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>Favorites({favorites.length})</Text>
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
    backgroundColor: "white",
    marginBottom: theme.spacing.s,
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
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppBar;
