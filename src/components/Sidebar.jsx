import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ productsData = [], onFilterChange }) => {
  const initialFormData = {
    price: 250,
    categories: ["All"],
    rating: null,
    sort: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const maxPrice =
    productsData.length > 0
      ? productsData.reduce(
          (acc, curr) => (curr.price > acc ? curr.price : acc),
          0
        )
      : 2000;

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

  useEffect(() => {
    const filteredData = formData.categories.includes("All")
      ? productsData
      : productsData.filter((product) =>
          formData.categories.includes(product.category)
        );
    onFilterChange(filteredData);
  }, [formData, productsData]);

  return (
    <form className="py-4 px-3">
      <div className="d-flex justify-content-between mb-3">
        <label className="form-label fw-bold">Filters</label>
        <Link
          type="button"
          onClick={() => setFormData(initialFormData)}
          className="text-dark"
        >
          Clear
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
          name="price"
          id="price"
          min="0"
          max={maxPrice}
          value={formData.price}
          step="5"
          className="form-range "
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
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="All"
            id="all"
            name="All"
            checked={formData.categories.includes("All")}
            onChange={categoryChangeHandler}
          />
          <label className="form-check-label" htmlFor="all">
            All
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Men"
            id="men"
            name="Men"
            checked={formData.categories.includes("Men")}
            onChange={categoryChangeHandler}
          />
          <label className="form-check-label" htmlFor="men">
            Men Clothing
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Women"
            id="women"
            name="Women"
            checked={formData.categories.includes("Women")}
            onChange={categoryChangeHandler}
          />
          <label className="form-check-label" htmlFor="women">
            Women Clothing
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Kids"
            id="kids"
            name="Kids"
            checked={formData.categories.includes("Kids")}
            onChange={categoryChangeHandler}
          />
          <label className="form-check-label" htmlFor="kids">
            Kids Clothing
          </label>
        </div>
      </div>

      {/* rating */}
      <div className="mb-3">
        <label className="form-label fw-bold">Rating</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="4"
            id="ratingFourAndAbove"
            name="rating"
          />
          <label className="form-check-label" htmlFor="ratingFourAndAbove">
            4 stars & above
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="3"
            id="ratingThreeAndAbove"
            name="rating"
          />
          <label className="form-check-label" htmlFor="ratingThreeAndAbove">
            3 stars & above
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="2"
            id="ratingTwoAndAbove"
            name="rating"
          />
          <label className="form-check-label" htmlFor="ratingTwoAndAbove">
            2 stars & above
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="1"
            id="ratingOneAndAbove"
            name="rating"
          />
          <label className="form-check-label" htmlFor="ratingOneAndAbove">
            1 stars & above
          </label>
        </div>
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
          />
          <label className="form-check-label" htmlFor="highToLow">
            Price - High to Low
          </label>
        </div>
      </div>
    </form>
  );
};

export default Sidebar;
