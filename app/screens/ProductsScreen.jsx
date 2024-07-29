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
import Product from "../components/Product";
import { toTitleCase } from "../utils/helper_function";
import { PRODUCT_DETAIL } from "../utils/route_constants";
import ProductFlatList from "../components/ProductFlatlist";

function ProductsScreen({ route, navigation }) {
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
      <ProductFlatList products={products} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: "white",
    alignItems: "center",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
    fontSize: 16,
  },
});

export default ProductsScreen;
