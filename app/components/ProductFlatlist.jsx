import { FlatList } from "react-native";
import Product from "./Product";
import { theme } from "../utils/theme";
import { PRODUCT_DETAIL } from "../utils/route_constants";

function ProductFlatList({ products, navigation }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <Product
          product={item}
          onPress={() => {
            navigation.navigate(PRODUCT_DETAIL, {
              product: item,
            });
          }}
        />
      )}
      contentContainerStyle={{ rowGap: theme.spacing.s }}
      columnWrapperStyle={{ gap: theme.spacing.s }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default ProductFlatList;
