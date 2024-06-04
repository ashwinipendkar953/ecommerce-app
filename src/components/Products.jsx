import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-light py-4 px-5">
      <p>
        <span className="fw-bold fs-5">Showing All Products</span>{" "}
        <span className="px-3">( Showing 20 products )</span>
      </p>
      <div className="row g-2 pt-2 pb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="row">
              <div className="col-md-4 bg-secondary-subtle">
                <img src="" alt="Men Premium Jacket" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fw-normal">Men Premium Jacket</h5>
                  <p className="card-text">
                    <span className="fw-bold fs-4">
                      <i className="bi bi-currency-rupee"></i>2000
                    </span>
                    <span className="text-decoration-line-through px-3 text-secondary">
                      <i className="bi bi-currency-rupee"></i>3000
                    </span>
                  </p>
                  <p
                    className="fw-bold text-black-50"
                    style={{ marginTop: "-1rem" }}
                  >
                    50% off
                  </p>
                  <div className="d-grid gap-2 mx-auto mt-5">
                    <Link className="btn btn-primary rounded-0" type="button">
                      Go to Cart
                    </Link>
                    <Link className="btn btn-secondary rounded-0" type="button">
                      Remove from Wishlist
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
