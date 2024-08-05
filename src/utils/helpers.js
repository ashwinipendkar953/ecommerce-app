/**
 * Calculates the discounted price of a product.
 * @param {number} price - The original price of the product.
 * @param {number} discountPercentage - The discount percentage to apply.
 * @returns {number} - The discounted price.
 */

export const calculateDiscountedPrice = (price, discountPercentage) => {
  return parseInt(price - price * (discountPercentage / 100));
};
