import { useState, useEffect } from "react";
import { getCategories, getProducts } from "../services/ProductService";
import { Category } from "../model/category";
import { Product } from "../model/product";

const useHomeScreenCategoriesController = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [menProducts, setMenProducts] = useState<Product[]>([]);
  const [womenProducts, setWomenProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesData = await getCategories();
        const productsData1 = await getProducts({
          category: categoriesData[2],
        });
        const productsData2 = await getProducts({
          category: categoriesData[3],
        });

        setCategories(categoriesData);
        setMenProducts(productsData1);
        setWomenProducts(productsData2);
      } catch (error: any) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return {
    categories,
    menProducts,
    womenProducts,
    isLoading,
    error,
  };
};

export default useHomeScreenCategoriesController;
