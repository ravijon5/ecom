import { View, Text, StyleSheet, FlatList } from "react-native";
import ListHeader from "./ListHeader";
import Product from "./Product";
import { Routes } from "../utils/route_constants";

import { theme } from "../utils/theme";

function HorizontalProductList({ products, text, onPress, navigation }) {
  return (
    <View>
      <ListHeader text={text} onPress={onPress} />
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <Product
            product={item}
            onPress={() => {
              navigation.navigate(Routes.PRODUCT_DETAIL, {
                product: item,
              });
            }}
          />
        )}
        contentContainerStyle={{ gap: theme.spacing.s }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HorizontalProductList;
