import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFiltering from "../hooks/useFiltering";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categorySlice";
import { setFilters } from "../features/products/productSlice.js";
import { calculateMaxPrice } from "../utils/helpers";

const ProductFilterForm = () => {
  const dispatch = useDispatch();
  const { categories: categoriesData } = useSelector(
    (state) => state.categories
  );
  const { categoryName } = useParams();

  const { products: productsData, filteredProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [price, setPrice] = useState(calculateMaxPrice(productsData));
  const [categories, setCategories] = useState(
    categoryName ? [categoryName] : ["All"]
  );
  const [rating, setRating] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

  const categoryChangeHandler = (event) => {
    const { checked, value } = event.target;
    if (checked && value === "All") {
      setCategories(["All"]);
    } else if (!checked && value === "All") {
      setCategories([]);
    } else if (checked) {
      setCategories((prevVal) =>
        prevVal.includes("All") ? [value] : [...prevVal, value]
      );
    } else {
      setCategories((prevVal) =>
        prevVal.filter((val) => val !== value && val !== "All")
      );
    }
  };

  const clearFilterHandler = () => {
    setPrice(calculateMaxPrice(filteredProducts));
    setCategories(categoryName ? [categoryName] : ["All"]);
    setRating(null);
    setSortByPrice(null);
  };

  useEffect(() => {
    dispatch(setFilters({ price, categories, rating, sortByPrice }));
  }, [dispatch, price, categories, rating, sortByPrice]);

  useFiltering(price, categories, rating, sortByPrice, productsData);

  return (
    <form className="py-4 px-3">
      {/* clear filters */}
      <div className="d-flex justify-content-between mb-3">
        <label className="form-label fw-bold">Filters</label>
        <Link
          type="button"
          onClick={clearFilterHandler}
          className="text-pink fw-semibold"
        >
          Clear All
        </Link>
      </div>

      {/* price */}
      <div className="mb-3">
        <label className="form-label fw-bold">Price</label>
        <div className="d-flex justify-content-between">
          <span>0</span>
          <span>{price}</span>
          <span>{calculateMaxPrice(productsData)}</span>
        </div>
        <input
          type="range"
          id="price"
          min="0"
          max={calculateMaxPrice(productsData)}
          value={price}
          className="w-100"
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>

      {/* categories */}
      <div className="mb-3">
        <label className="form-label fw-bold">Category</label>
        {categoriesData?.map((category) => (
          <div className="form-check" key={category._id}>
            <input
              className="form-check-input"
              type="checkbox"
              value={category.name}
              id={category._id}
              name={category.name}
              checked={categories.includes(`${category.name}`)}
              onChange={categoryChangeHandler}
            />
            <label className="form-check-label" htmlFor={category._id}>
              {category.name}
            </label>
          </div>
        ))}
      </div>

      {/* rating */}
      <div className="mb-3">
        <label className="form-label fw-bold">Rating</label>
        {[4, 3, 2, 1].map((rating) => (
          <div className="form-check" key={rating}>
            <input
              className="form-check-input"
              type="radio"
              value={rating}
              id={`rating${rating}AndAbove`}
              name="rating"
              onChange={(event) => setRating(event.target.value)}
            />
            <label
              className="form-check-label"
              htmlFor={`rating${rating}AndAbove`}
            >
              {rating} stars & above
            </label>
          </div>
        ))}
      </div>

      {/* sort by price */}
      <div className="mb-3">
        <label className="form-label fw-bold">Sort by</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="asc"
            id="asc"
            name="sortByPrice"
            onChange={(event) => setSortByPrice(event.target.value)}
          />
          <label className="form-check-label" htmlFor="asc">
            Price - Low to High
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="desc"
            id="desc"
            name="sortByPrice"
            onChange={(event) => setSortByPrice(event.target.value)}
          />
          <label className="form-check-label" htmlFor="desc">
            Price - High to Low
          </label>
        </div>
      </div>
    </form>
  );
};

export default ProductFilterForm;
