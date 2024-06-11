import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryCardView = () => {
  const { data } = useFetch(
    "https://4c7ed629-ffb2-449c-83b8-7974797d0510-00-2b5gxma3p76yy.sisko.replit.dev/api/categories"
  );

  return (
    <div className="container py-3">
      <div className="row g-3">
        {data?.map((category) => (
          <div key={category._id} className="col-md-3">
            <div className="card rounded-0">
              <img
                src={category.image}
                alt={category.name}
                className="img-fluid"
                style={{ height: "150px" }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center text-center">
                <Link
                  className="card-text text-white text-decoration-none fw-bolder fs-5"
                  to={`/products/${category._id}`}
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
