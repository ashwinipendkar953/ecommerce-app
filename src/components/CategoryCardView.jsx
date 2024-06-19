import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryCardView = () => {
  const { data, loading, error } = useFetch(
    "https://ecommerce-api-teal.vercel.app/api/categories"
  );

  return (
    <div className="container py-3">
      {loading && (
        <div className="d-flex align-items-center mb-3">
          <div
            className="spinner-border text-primary me-2 spinner-border-sm"
            aria-hidden="true"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></div>
          <p className="mb-0" role="status">
            Loading categories...
          </p>
        </div>
      )}
      {error && (
        <p className="text-danger">
          An error ocurred while getting categories.
        </p>
      )}
      <div className="row g-3">
        {data?.map((category) => (
          <div key={category._id} className="col-md-3">
            <div className="card rounded-0">
              <img
                src={category.image}
                alt={category.name}
                className="img-fluid object-fit-cover"
                style={{ height: "150px", width: "100%" }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
                <Link
                  className="card-text text-white text-decoration-none fw-bolder fs-5"
                  to={`/products/${category.name}`}
                >
                  {category.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCardView;
