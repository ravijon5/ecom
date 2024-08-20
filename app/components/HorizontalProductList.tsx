import { View, Text, StyleSheet, FlatList } from "react-native";
import ListHeader from "./ListHeader";
import { Routes } from "../utils/route_constants";

import { theme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import ProductContainer from "./ProductContainer";
import { Product } from "../model/product";
import { HomeStackNavigationProps } from "../utils/route_types";

interface HorizontalProductListProps {
  products: Product[];
  text: string;
  onPress: () => void;
}

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  products,
  text,
  onPress,
}) => {
  const { navigate } =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCT_DETAIL>>();

  return (
    <View>
      <ListHeader text={text} onPress={onPress} />
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ProductContainer
            product={item}
            onPress={() => {
              navigate(Routes.PRODUCT_DETAIL, {
                product: item,
              });
            }}
          />
        )}
        contentContainerStyle={{ gap: theme.spacing.s }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HorizontalProductList;
