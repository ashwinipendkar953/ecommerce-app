import { Link } from "react-router-dom";

const ProductCard = ({ data, loading, error }) => {
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
              <div className="col-sm-6 col-lg-4" key={product._id}>
                <div className="card h-100 position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
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
                        <h6 className="fw-semibold">
                          {product.name.slice(0, 25)}...
                        </h6>
                      </div>
                    </div>

                    {/* price */}
                    <div>
                      <p className="card-text">
                        <span
                          className="text-decoration-line-through text-secondary"
                          style={{ marginRight: "5px" }}
                        >
                          ₹{product.price}
                        </span>
                        <span className="fw-semibold ">₹{discountedPrice}</span>
                        <span className="mx-1">|</span>
                        <span className="text-success">
                          {product.discountPercentage}% off
                        </span>
                      </p>
                    </div>

                    {/* rating */}
                    <div>
                      {product.rating}{" "}
                      <span>
                        <i className="bi bi-star-fill"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    className="row "
                    style={{
                      marginLeft: "0.4px",
                      marginRight: "0.4px",
                      height: "45px",
                    }}
                  >
                    <div className="col-3 center-content border-top">
                      <Link type="button" className="text-pink">
                        {product.isWishlisted ? (
                          <i
                            className="bi bi-heart-fill"
                            style={{ fontSize: "25px" }}
                          ></i>
                        ) : (
                          <i
                            className="bi bi-heart"
                            style={{ fontSize: "25px" }}
                          ></i>
                        )}
                      </Link>
                    </div>
                    <div
                      className="col-9 center-content bg-pink"
                      style={{ borderRadius: "0 0 5px 0" }}
                    >
                      <Link
                        type="button"
                        className="text-light text-decoration-none fw-semibold"
                      >
                        Add to Cart
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

export default ProductCard;
