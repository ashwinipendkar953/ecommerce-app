// useFiltering.js
import { useEffect } from "react";
import { setFilteredProducts } from "../features/products/productSlice";
import { useDispatch } from "react-redux";

const useFiltering = (productsData, formData) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const applyDiscount = (price, discount) => price - price * (discount / 100);

    const filterByCategory = (products, categories) =>
      categories.includes("All")
        ? products
        : products.filter((product) => categories.includes(product.category));

    const filterByRating = (products, rating) =>
      products.filter((product) => product.rating >= rating);

    const sortByPrice = (products, sortBy) =>
      products.sort((a, b) => {
        const priceA = applyDiscount(a.price, a.discountPercentage);
        const priceB = applyDiscount(b.price, b.discountPercentage);
        return sortBy === "asc" ? priceA - priceB : priceB - priceA;
      });

    const filterByPrice = (products, maxPrice) =>
      products.filter(
        (product) =>
          applyDiscount(product.price, product.discountPercentage) <= maxPrice
      );

    let filteredData = filterByCategory(productsData, formData.categories);
    filteredData = filterByRating(filteredData, formData.rating);
    filteredData = sortByPrice(filteredData, formData.sortByPrice);
    filteredData = filterByPrice(filteredData, formData.price);

    dispatch(setFilteredProducts(filteredData));
  }, [formData, productsData]);
};

export default useFiltering;
