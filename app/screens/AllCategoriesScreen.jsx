import { View, Text, FlatList, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import CategoryRow from "../components/CategoryRow";
import { getImageUrl, toTitleCase } from "../utils/helper_function";
import { PRODUCTS } from "../utils/route_constants";
import { useLayoutEffect } from "react";

function AllCategoriesScreen({ route, navigation }) {
  const categories = route.params.categories;

  useLayoutEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <Text style={theme.textVariants.headerBold}>Shop by Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CategoryRow
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.m,
    backgroundColor: "white",
    flex: 1,
  },
});

export default AllCategoriesScreen;
