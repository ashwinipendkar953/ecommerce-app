import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-light py-4 px-5">
      <p>
        <span className="fw-bold fs-5">Showing All Products</span>{" "}
        <span className="px-3">( Showing 20 products )</span>
      </p>
      <div className="row g-5 pt-2 pb-5">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/o/6/4xl-db1024-3bros-original-imagt7byhhrqdkym.jpeg?q=70"
              alt="Men Premium Jacket"
              className="card-img-top"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="card-title ">Men Premium Jacket</h6>
                  <p className="card-text">
                    <span className="fw-bold fs-5">
                      <i className="bi bi-currency-rupee"></i>2000
                    </span>
                    <span className="text-decoration-line-through px-2 text-secondary">
                      <i className="bi bi-currency-rupee"></i>3000
                    </span>

                    <span className="text-success fw-semibold">
                      <small>50% off</small>
                    </span>
                  </p>
                </div>
                <Link className="text-dark btn-outline-dark">
                  <i className="bi bi-heart" style={{ fontSize: "25px" }}></i>
                </Link>
              </div>

              <div className="d-grid mt-2 mx-auto">
                <Link className="btn btn-primary rounded-0" type="button">
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/o/x/m-st1-vebnor-original-imagn6bwv8ysurru.jpeg?q=70"
              alt="Men Premium Jacket"
              className="card-img-top"
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="card-title ">Men Premium Jacket</h6>
                  <p className="card-text">
                    <span className="fw-bold fs-5">
                      <i className="bi bi-currency-rupee"></i>2000
                    </span>
                    <span className="text-decoration-line-through px-2 text-secondary">
                      <i className="bi bi-currency-rupee"></i>3000
                    </span>

                    <span className="text-success fw-semibold">
                      <small>50% off</small>
                    </span>
                  </p>
                </div>
                <Link className="text-dark btn-outline-dark">
                  <i className="bi bi-heart" style={{ fontSize: "25px" }}></i>
                </Link>
              </div>

              <div className="d-grid mt-2 mx-auto">
                <Link className="btn btn-primary rounded-0" type="button">
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
