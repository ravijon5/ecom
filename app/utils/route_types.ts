import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { Routes } from "./route_constants";
import { RouteProp } from "@react-navigation/native";
import { Product } from "../model/product";
import { Address } from "../model/address";

export type HomeStackParams = {
  [Routes.HOME]: undefined;
  [Routes.ALL_CATEGORIES]: { categories: string[] };
  [Routes.PRODUCTS]: { category: string };
  [Routes.PRODUCT_DETAIL]: { product: Product };
  [Routes.PROFILE]: undefined;
  [Routes.FAVORITES]: undefined;
  [Routes.ADDRESS]: undefined;
  [Routes.ADD_ADDRESS]: { item?: Address };
};

export type HomeStackNavigationProps<T extends keyof HomeStackParams> =
  NativeStackNavigationProp<HomeStackParams, T>;

export type HomeStackRouteProp<T extends keyof HomeStackParams> = RouteProp<
  HomeStackParams,
  T
>;

export type CartStackParams = {
  [Routes.CART]: undefined;
  [Routes.CHECKOUT]: undefined;
};

export type CartStackNavigationProps<T extends keyof CartStackParams> =
  NativeStackNavigationProp<CartStackParams, T>;

export type CartStackRouteProp<T extends keyof CartStackParams> = RouteProp<
  CartStackParams,
  T
>;

export type BottomTabParams = {
  [Routes.HOME_BOTTOM_TAB]: undefined;
  [Routes.NOTIFICATION]: undefined;
  [Routes.CART_STACK]: undefined;
  [Routes.PROFILE_BOTTOM_TAB]: { initialRouteName: string };
};

export type BottomTabNavigationProps<T extends keyof BottomTabParams> =
  BottomTabNavigationProp<BottomTabParams, T>;

export type BottomTabRouteProp<T extends keyof BottomTabParams> = RouteProp<
  BottomTabParams,
  T
>;
