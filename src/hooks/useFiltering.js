import { useEffect } from "react";
import { setFilteredProducts } from "../features/products/productSlice";
import { useDispatch } from "react-redux";
import { calculateDiscountedPrice } from "../utils/helpers";

const useFiltering = (price, categories, rating, sortByPrice, productsData) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const filterByCategory = (products, categories) =>
      categories.includes("All")
        ? products
        : products.filter((product) => categories.includes(product.category));

    const filterByRating = (products, rating) =>
      rating
        ? products.filter((product) => product.rating >= rating)
        : products;

    const sortByPriceOrder = (products, sortBy) => {
      return [...products].sort((a, b) => {
        const priceA = calculateDiscountedPrice(a.price, a.discountPercentage);
        const priceB = calculateDiscountedPrice(b.price, b.discountPercentage);
        return sortBy === "asc" ? priceA - priceB : priceB - priceA;
      });
    };

    const filterByPrice = (products, maxPrice) =>
      products.filter(
        (product) =>
          calculateDiscountedPrice(product.price, product.discountPercentage) <=
          maxPrice
      );

    let filteredData = filterByCategory(productsData, categories);
    filteredData = filterByRating(filteredData, rating);
    filteredData = sortByPriceOrder(filteredData, sortByPrice);
    filteredData = filterByPrice(filteredData, price);

    dispatch(setFilteredProducts(filteredData));
  }, [dispatch, price, categories, rating, sortByPrice, productsData]);
};

export default useFiltering;
