import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import { theme } from "../utils/theme";
import ProductFlatList from "../components/ProductFlatList";

const FavoritesScreen: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.textStyle}>No Favorite Products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductFlatList products={favorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: theme.fontSize.l,
    fontWeight: "bold",
  },
});

export default FavoritesScreen;
