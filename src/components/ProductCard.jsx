import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {
    productImage,
    productName,
    productBrand,
    productPrice,
    discountedPrice,
    discountPercentage,
    productRating,
    isWishlisted,
  } = props;
  return (
    <div className="card h-100 position-relative">
      <img
        src={productImage}
        alt={productName}
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
            <h6 className="card-title text-muted">{productBrand}</h6>
            <h6 className="fw-semibold">{productName.slice(0, 25)}...</h6>
          </div>
        </div>

        {/* price */}
        <div>
          <p className="card-text">
            <span
              className="text-decoration-line-through text-secondary"
              style={{ marginRight: "5px" }}
            >
              ₹{productPrice}
            </span>
            <span className="fw-semibold ">₹{discountedPrice}</span>
            <span className="mx-1">|</span>
            <span className="text-success bg-lightgreen fw-semibold px-1">
              {discountPercentage}% off
            </span>
          </p>
        </div>

        {/* rating */}
        <div>
          {productRating}{" "}
          <span>
            <i className="bi bi-star-fill star-color accordion-buttonr"></i>
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
            {isWishlisted ? (
              <i className="bi bi-heart-fill" style={{ fontSize: "25px" }}></i>
            ) : (
              <i className="bi bi-heart" style={{ fontSize: "25px" }}></i>
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
  );
};

export default ProductCard;
