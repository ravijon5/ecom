import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from "react-native";
import useProductsController from "../controllers/CategoryController";
import { theme } from "../utils/theme";
import { toTitleCase } from "../utils/helper_functions";
import ProductFlatList from "../components/ProductFlatList";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  HomeStackNavigationProps,
  HomeStackRouteProp,
} from "../utils/route_types";
import { Routes } from "../utils/route_constants";

const ProductsScreen: React.FC = () => {
  const route = useRoute<HomeStackRouteProp<typeof Routes.PRODUCTS>>();

  const category = route.params.category;
  const { products, isLoading, error } = useProductsController({ category });

  if (isLoading) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No Products</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>
          {toTitleCase(category)}({products.length})
        </Text>
      </View>
      <ProductFlatList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
    alignItems: "center",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",

    alignSelf: "flex-start",
    // marginLeft: theme.spacing.m,
    marginBottom: theme.spacing.m,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: theme.fontSize.m,
  },
});

export default ProductsScreen;
