import useHomeScreenCategoriesController from "../controllers/HomeScreenController";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { theme } from "../utils/theme";
import SearchField from "../components/SearchField";
import HorizontalProductList from "../components/HorizontalProductList";
import HorizontalCategoryList from "../components/HorizontalCategoryList";
import { PRODUCTS } from "../utils/route_constants";

function HomeScreen({ navigation }) {
  const { categories, menProducts, womenProducts, isLoading, error } =
    useHomeScreenCategoriesController();

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

  return (
    <ScrollView style={styles.container}>
      <SearchField />
      <View>
        <HorizontalCategoryList
          categories={categories}
          navigation={navigation}
        />
      </View>
      <HorizontalProductList
        products={menProducts}
        text="Men's Clothing"
        navigation={navigation}
        onPress={() => {
          navigation.navigate(PRODUCTS, {
            category: "men's clothing",
          });
        }}
      />
      <HorizontalProductList
        products={womenProducts}
        text="Women's Clothing"
        navigation={navigation}
        onPress={() => {
          navigation.navigate(PRODUCTS, {
            category: "women's clothing",
          });
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: "white",
  },
  centeredContainer: {
    padding: theme.spacing.m,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
});

export default HomeScreen;
