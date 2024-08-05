import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./categorySlice";
import LoadingSpinner from "../../components/LoadingSpinner";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  return (
    <div className="container py-3">
      {status === "loading" && (
        <LoadingSpinner size="md" message="Loading categories..." />
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className="row d-lg-flex justify-content-between g-3">
        {categories?.map((category) => {
          if (category.name === "All") return null;
          return (
            <div key={category._id} className="custom-col-lg-2 col-md-6">
              <div className="card rounded-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="img-fluid object-fit-cover"
                  style={{ height: "150px", width: "100%" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
                  <Link
                    className="card-text w-100 text-white text-decoration-none fw-bolder fs-4"
                    to={`/products/${category.name}`}
                  >
                    {category.name}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
