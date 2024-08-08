import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../features/products/productSlice";

import Breadcrumb from "./Breadcrumb";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);

  const product = products.find((product) => product._id == productId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [showAllProductDetails, setShowAllProductDetails] = useState(false);
  const itemsToShow = 5;

  const productDetailsKeys = Object.keys(product.details);
  const detailsToShow = showAllProductDetails
    ? productDetailsKeys
    : productDetailsKeys.slice(0, itemsToShow);

  return (
    <main className="container my-4">
      <Breadcrumb product={product} />

      <div className="row g-4">
        {/* product image part */}
        <ProductImage product={product} />

        {/* product details part */}
        <div className="col-md-6">
          <div className="card  border-0">
            <div className="card-body pt-0">
              <ProductInfo product={product} />
              {/* Product Details */}
              <div>
                <h4>Product Details</h4>
                <div>
                  {detailsToShow.map((key, index) => (
                    <div key={index} className="row my-3">
                      <div className="col-3 text-grey fw-semibold">{key}</div>
                      <div className="col-9">
                        {Array.isArray(product.details[key])
                          ? product.details[key].join(", ")
                          : product.details[key]}
                      </div>
                    </div>
                  ))}
                  {!showAllProductDetails &&
                  productDetailsKeys.length > itemsToShow ? (
                    <div className="my-3">
                      <button
                        className="btn btn-link p-0"
                        onClick={() => setShowAllProductDetails(true)}
                      >
                        See More
                      </button>
                    </div>
                  ) : (
                    <div className="my-3">
                      <button
                        className="btn btn-link p-0"
                        onClick={() => setShowAllProductDetails(false)}
                      >
                        See Less
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* product description */}
              {product.description && (
                <>
                  <hr />
                  <div>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
