import {
  getCategories,
  getProducts,
} from "../../../app/services/ProductsService";
import fetchMock from "jest-fetch-mock";
import { expect, describe, it, beforeEach, afterEach } from "@jest/globals";

fetchMock.enableMocks();

const API_URL = "https://fakestoreapi.com/products";

describe("category api test", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches category successfully", async () => {
    const categories = [
      "electronics",
      "jewelery",
      "men's clothing",
      //   "women's clothing",
    ];

    fetchMock.mockResponseOnce(JSON.stringify(categories));

    const result = await getCategories();
    expect(result).toEqual(categories);
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/categories`);
  });

  it("not found error when fetching category", async () => {
    fetchMock.mockResponse(JSON.stringify({}), { status: 404 });

    try {
      await getCategories();
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual("Not found");
    }

    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/categories`);
  });
});

describe("category product api test", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches category products successfully", async () => {
    const products = [
      {
        id: 5,
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: {
          rate: 4.6,
          count: 400,
        },
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(products));

    const result = await getProducts({ category: "jewelery" });
    expect(result).toEqual(products);
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/category/jewelery`);
  });

  it("not found error when fetching category products", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });

    try {
      await getProducts({ category: "jewelery" });
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toEqual("Not found");
    }

    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/category/jewelery`);
  });
});
