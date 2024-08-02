import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFiltering from "../hooks/useFiltering";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categorySlice";

const ProductFilter = ({ productsData = [], onFilterChange }) => {
  const dispatch = useDispatch();
  const { categories: categoriesData } = useSelector(
    (state) => state.categories
  );
  const { categoryName } = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const maxPrice =
    productsData.length > 0
      ? productsData.reduce(
          (acc, curr) => (curr.price > acc ? curr.price : acc),
          0
        )
      : 40000;

  const INITIAL_FORM_DATA = {
    price: maxPrice,
    categories: categoryName ? categoryName : "All",
    rating: null,
    sortByPrice: null,
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const categoryChangeHandler = (event) => {
    const { checked, value } = event.target;

    setFormData((prevData) => {
      let updatedCategories = [...prevData.categories];

      if (checked && value === "All") {
        updatedCategories = ["All"];
      } else if (!checked && value === "All") {
        updatedCategories = [];
      } else if (checked) {
        updatedCategories = updatedCategories.includes("All")
          ? [value]
          : [...updatedCategories, value];
      } else {
        updatedCategories = updatedCategories.filter(
          (val) => val !== value && val !== "All"
        );
      }

      return { ...prevData, categories: updatedCategories };
    });
  };

  useFiltering(productsData, formData, setFormData, onFilterChange);

  return (
    <form className="py-4 px-3">
      <div className="d-flex justify-content-between mb-3">
        <label className="form-label fw-bold">Filters</label>
        <Link
          type="button"
          onClick={() => setFormData(INITIAL_FORM_DATA)}
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
          <span>{formData.price}</span>
          <span>{maxPrice}</span>
        </div>
        <input
          type="range"
          id="price"
          min="0"
          max={maxPrice}
          value={formData.price}
          className="w-100"
          onChange={(event) =>
            setFormData((prevData) => ({
              ...prevData,
              price: event.target.value,
            }))
          }
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
              checked={formData.categories.includes(`${category.name}`)}
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
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  rating: event.target.value,
                }))
              }
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

      {/* sort */}
      <div className="mb-3">
        <label className="form-label fw-bold">Sort by</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="lowToHigh"
            id="lowToHigh"
            name="sortByPrice"
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                sortByPrice: event.target.value,
              }))
            }
          />
          <label className="form-check-label" htmlFor="lowToHigh">
            Price - Low to High
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="highToLow"
            id="highToLow"
            name="sortByPrice"
            onChange={(event) =>
              setFormData((prevData) => ({
                ...prevData,
                sortByPrice: event.target.value,
              }))
            }
          />
          <label className="form-check-label" htmlFor="highToLow">
            Price - High to Low
          </label>
        </div>
      </div>
    </form>
  );
};

export default ProductFilter;
