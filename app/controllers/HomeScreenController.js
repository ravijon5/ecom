import { useState, useEffect } from "react";
import { getCategories, getProducts } from "../services/ProductsService";

const useHomeScreenCategoriesController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [categories, setCategories] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);

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
      } catch (error) {
        setError(error);
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
