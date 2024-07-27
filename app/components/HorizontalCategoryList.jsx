import { View, Text, StyleSheet, FlatList } from "react-native";
import ListHeader from "../components/ListHeader";
import { ALL_CATEGORIES, HOME, PRODUCTS } from "../utils/route_constants";
import CategoryItem from "./CategoryItem";
import { getImageUrl, toTitleCase } from "../utils/helper_function";

function HorizontalCategoryList({ categories, navigation }) {
  return (
    <>
      <ListHeader
        text="Categories"
        onPress={() => {
          navigation.navigate(ALL_CATEGORIES, {
            categories: categories,
          });
        }}
      />
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
              navigation.navigate(PRODUCTS, {
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
