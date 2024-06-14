import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryCardView = () => {
  const { data, loading, error } = useFetch(
    "https://4c7ed629-ffb2-449c-83b8-7974797d0510-00-2b5gxma3p76yy.sisko.replit.dev/api/categories"
  );

  return (
    <div className="container py-3">
      {loading && <p>Loading categories...</p>}
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
