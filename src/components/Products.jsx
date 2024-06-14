import { Link } from "react-router-dom";

const Products = ({ data, loading, error }) => {
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
      <div className="row g-4 pt-2 pb-5">
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
              <div className="col-md-6 col-lg-4 col-xl-3" key={product._id}>
                <div className="card rounded-0 h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top rounded-0"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="card-title text-muted">
                          {product.brand}
                        </h6>
                        <h6 className="fw-normal">
                          <small className="d-none d-lg-inline">{`${product.name.slice(
                            0,
                            18
                          )}...`}</small>
                          <small className="d-none d-md-inline d-lg-none">
                            {product.name.slice(0, 25)}...
                          </small>
                          <small className="d-inline d-md-none">
                            {product.name.slice(0, 35)}...
                          </small>
                        </h6>
                      </div>
                      <Link
                        className={`btn-outline-dark ${
                          product.isWishlisted ? "text-pink" : "text-dark"
                        }`}
                      >
                        <i
                          className="bi bi-heart-fill"
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

                        <span className="text-pink fw-semibold">
                          <small>{product.discountPercentage}% off</small>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="card-footer btn-pink text-center rounded-0 ">
                    <Link className="text-light text-decoration-none fw-semibold">
                      Add to Cart
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

export default Products;
