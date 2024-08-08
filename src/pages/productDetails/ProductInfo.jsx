import { calculateDiscountedPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { TbHeart, TbHeartFilled, TbHeartPlus } from "react-icons/tb";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <h3 className="card-title m-0">{product.brand}</h3>
      <p className="card-text">{product.name}</p>
      <p
        className="card-text border border-1 px-2 center-content"
        style={{ width: "80px" }}
      >
        {product.rating}
        <span className="px-1">
          <i className="bi bi-star-fill star-color accordion-buttonr"></i>
        </span>
      </p>

      <h4 className="card-text">
        ₹{calculateDiscountedPrice(product.price, product.discountPercentage)}{" "}
        <span className="text-success">{product.discountPercentage}% Off</span>
      </h4>

      <h5
        className="card-text text-muted fw-light"
        style={{ fontSize: "18px" }}
      >
        MRP ₹
        <span className="text-decoration-line-through">{product.price}</span>{" "}
        Inclusive of all taxes
      </h5>

      {/* add to wishlist and add to bag button */}
      <div className="d-grid gap-2 d-md-flex my-4">
        <Link
          className="btn border border-1 center-content rounded-0"
          style={{ minWidth: "206px", height: "48px" }}
        >
          <TbHeartPlus style={{ fontSize: "24px" }} />{" "}
          <span className="mx-2 fw-semibold">Add to Wishlist</span>
        </Link>
        <Link
          className="btn btn-dark center-content rounded-0 fw-semibold w-100"
          style={{ minWidth: "300px", height: "48px" }}
        >
          Add to Cart
        </Link>
      </div>

      {/* <div className="d-grid gap-2 d-md-flex my-4">
    <Link
      className="btn border border-1 center-content rounded-0"
      style={{ minWidth: "206px", height: "48px" }}
    >
      <TbHeartFilled
        className="text-pink"
        style={{ fontSize: "24px" }}
      />{" "}
      <span className="mx-2 fw-semibold">Added to Wishlist</span>
    </Link>
    <Link
      className="btn btn-pink center-content rounded-0 fw-semibold w-100 "
      style={{ minWidth: "300px", height: "48px" }}
    >
      View Cart
    </Link>
  </div> */}
      <hr />
    </div>
  );
};

export default ProductInfo;
