import { Category } from "../model/category";
import { API_URL } from "../utils/constants";

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error("Not found");
  }
  return await response.json();
};

export const getProducts = async ({ category }: Category) => {
  const response = await fetch(`${API_URL}/category/${category}`);
  if (!response.ok) {
    throw new Error("Not found");
  }
  return await response.json();
};
