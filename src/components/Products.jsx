import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://4c7ed629-ffb2-449c-83b8-7974797d0510-00-2b5gxma3p76yy.sisko.replit.dev/api/products"
  );

  console.log(data);

  return (
    <div className="bg-light py-4 px-5 h-100">
      <p>
        <span className="fw-bold fs-5">Showing All Products</span>{" "}
        <span className="px-3">
          {data &&
            `(Showing ${data.length} ${
              data.length === 1 ? "product" : "products"
            })`}{" "}
        </span>
      </p>
      <div className="row g-5 pt-2 pb-5">
        {loading && <p>Loading...</p>}

        {error && (
          <p className="text-danger">
            An error occurred while fetching products.
          </p>
        )}

        {data &&
          data.map((product) => {
            const discountedPrice = parseInt(
              product.price - product.price * (product.discountPercentage / 100)
            );
            return (
              <div className="col-md-4" key={product._id}>
                <div className="card h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "23vw",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="card-title text-secondary">
                          {product.brand}
                        </h6>
                        <h6 className="fw-normal">{`${product.name.slice(
                          0,
                          25
                        )}...`}</h6>
                      </div>
                      <Link className="text-dark btn-outline-dark">
                        <i
                          className="bi bi-heart"
                          style={{ fontSize: "25px" }}
                        ></i>
                      </Link>
                    </div>

                    <div>
                      <p className="card-text">
                        <span className="fw-bold fs-5">
                          <i className="bi bi-currency-rupee"></i>
                          {discountedPrice}
                        </span>
                        <span className="text-decoration-line-through px-2 text-secondary">
                          <i className="bi bi-currency-rupee"></i>
                          {product.price}
                        </span>

                        <span className="text-success fw-semibold">
                          <small>{product.discountPercentage}% off</small>
                        </span>
                      </p>
                    </div>

                    <div className="d-grid mt-2 mx-auto">
                      <Link
                        className="btn btn-primary rounded-0 mt-auto"
                        type="button"
                      >
                        Go to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
