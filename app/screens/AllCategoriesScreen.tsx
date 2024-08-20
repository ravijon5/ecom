import { View, Text, FlatList, StyleSheet, TextStyle } from "react-native";
import { theme } from "../utils/theme";
import CategoryRow from "../components/CategoryRow";
import { getImageUrl, toTitleCase } from "../utils/helper_functions";

import {
  HomeStackNavigationProps,
  HomeStackRouteProp,
} from "../utils/route_types";
import { RouteNames, Routes } from "../utils/route_constants";
import { useNavigation, useRoute } from "@react-navigation/native";

type AllCategoriesRouteProp = HomeStackRouteProp<typeof Routes.ALL_CATEGORIES>;

const AllCategoriesScreen: React.FC = () => {
  const route = useRoute<AllCategoriesRouteProp>();

  const categories = route.params.categories;

  const navigation =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCTS>>();

  return (
    <View style={styles.container}>
      <Text style={theme.textVariants.headerBold as TextStyle}>
        Shop by Categories
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CategoryRow
            imageUrl={getImageUrl(index)}
            text={toTitleCase(item)}
            onPress={() => {
              navigation.navigate(Routes.PRODUCTS, {
                category: item,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
    backgroundColor: theme.colors.background,
    flex: 1,
  },
});

export default AllCategoriesScreen;
