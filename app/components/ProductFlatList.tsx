import { FlatList } from "react-native";
import ProductContainer from "./ProductContainer";
import { theme } from "../utils/theme";
import { Routes } from "../utils/route_constants";
import { Product } from "../model/product";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../utils/route_types";

type ProductFlatListProp = {
  products: Product[];
};

const ProductFlatList: React.FC<ProductFlatListProp> = ({ products }) => {
  const navigation =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCT_DETAIL>>();

  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <ProductContainer
          product={item}
          onPress={() => {
            navigation.navigate(Routes.PRODUCT_DETAIL, {
              product: item,
            });
          }}
        />
      )}
      contentContainerStyle={{ rowGap: theme.spacing.s }}
      columnWrapperStyle={{ gap: theme.spacing.s }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
  );
};

export default ProductFlatList;
