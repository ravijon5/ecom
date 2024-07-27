import { useState, useEffect } from "react";
import { getProducts } from "../services/ProductsService";

const useProductsController = ({ category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const productsData = await getProducts({ category });
        setProducts(productsData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
  };
};

export default useProductsController;
