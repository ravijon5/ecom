export const Routes = {
  HOME: "home" as const,
  HOME_BOTTOM_TAB: "home_bottom_tab" as const,
  ALL_CATEGORIES: "all_categories" as const,
  PRODUCTS: "products" as const,
  HOME_STACK: "home_stack" as const,
  CART_STACK: "cart_stack" as const,
  PROFILE_STACK: "profile_stack" as const,
  NOTIFICATION: "notification" as const,
  CART: "cart" as const,
  CHECKOUT: "checkout" as const,
  ORDERS: "orders" as const,
  PROFILE: "profile" as const,
  PROFILE_BOTTOM_TAB: "profile_bottom_tab" as const,
  PRODUCT_DETAIL: "product_detail" as const,
  FAVORITES: "favorites" as const,
  ADDRESS: "address" as const,
  ADD_ADDRESS: "add_address" as const,
};

export type RouteNames = (typeof Routes)[keyof typeof Routes];
