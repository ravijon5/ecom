import { useState, useEffect } from "react";
import { Category } from "../model/category";
import { getProducts } from "../services/ProductService";
import { Product } from "../model/product";

const useProductsController = ({ category }: Category) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const productsData = await getProducts({ category });
        setProducts(productsData);
      } catch (error: any) {
        setError((error as Error).message);
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
