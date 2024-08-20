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
import { Routes } from "../utils/route_constants";
import HorizontalCategoryList from "../components/HorizontalCategoryList";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../utils/route_types";

const HomeScreen: React.FC = () => {
  const { categories, menProducts, womenProducts, isLoading, error } =
    useHomeScreenCategoriesController();

  const navigation =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCTS>>();

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
        <HorizontalCategoryList categories={categories} />
      </View>
      <HorizontalProductList
        products={menProducts}
        text="Men's Clothing"
        onPress={() => {
          navigation.navigate(Routes.PRODUCTS, {
            category: "men's clothing",
          });
        }}
      />
      <HorizontalProductList
        products={womenProducts}
        text="Women's Clothing"
        onPress={() => {
          navigation.navigate(Routes.PRODUCTS, {
            category: "women's clothing",
          });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
  },
  centeredContainer: {
    padding: theme.spacing.m,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    flex: 1,
  },
});

export default HomeScreen;
