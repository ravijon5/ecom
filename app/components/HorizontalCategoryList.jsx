import { View, Text, StyleSheet, FlatList } from "react-native";
import ListHeader from "../components/ListHeader";
import { Routes } from "../utils/route_constants";

import CategoryItem from "./CategoryItem";
import { getImageUrl, toTitleCase } from "../utils/helper_function";

function HorizontalCategoryList({ categories, navigation }) {
  function onPressHandler() {
    navigation.navigate(Routes.ALL_CATEGORIES, {
      categories: categories,
    });
  }

  return (
    <>
      <ListHeader text="Categories" onPress={onPressHandler} />
      <FlatList
        horizontal
        padding={0}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CategoryItem
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
    </>
  );
}

export default HorizontalCategoryList;
