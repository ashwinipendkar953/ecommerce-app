// useFiltering.js
import { useEffect } from "react";

const useFiltering = (productsData, formData, setFormData, onFilterChange) => {
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
        return sortBy === "lowToHigh" ? priceA - priceB : priceB - priceA;
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

    onFilterChange(filteredData);
  }, [formData, setFormData, productsData]);
};

export default useFiltering;
