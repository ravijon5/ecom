import { View, Text, StyleSheet } from "react-native";
import ProductFlatList from "../components/ProductFlatlist";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import { theme } from "../utils/theme";

function FavoritesScreen({ products }) {
  const { favorites } = useContext(FavoritesContext);

  console.log("favorites: ", favorites);

  if (favorites.length === 0) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.textStyle}>No Products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductFlatList products={favorites} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: theme.spacing.m,
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;
