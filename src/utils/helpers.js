// Calculates the discounted price of a product.
export const calculateDiscountedPrice = (price, discountPercentage) => {
  return Math.round(price - price * (discountPercentage / 100));
};

// Calculate maxium price from products
export const calculateMaxPrice = (productsData) => {
  return productsData.length > 0
    ? productsData.reduce(
        (acc, curr) => (curr.price > acc ? curr.price : acc),
        0
      )
    : 40000;
};
