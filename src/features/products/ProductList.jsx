import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductCard from "../../components/ProductCard";
import { calculateDiscountedPrice } from "../../utils/helpers";

const ProductList = () => {
  const { filteredProducts, status, error } = useSelector(
    (state) => state.products
  );

  return (
    <div className="bg-light py-4 px-5 h-100">
      {" "}
      <p>
        <span className="fw-bold fs-5">Showing All Products</span>{" "}
        <span className="px-3">
          {filteredProducts &&
            `(Showing ${filteredProducts.length} ${
              filteredProducts.length === 1 ? "product" : "products"
            })`}{" "}
        </span>
      </p>
      <div className="row g-4 pt-2 pb-5">
        {status === "loading" && <LoadingSpinner />}

        {error && <p className="text-danger">{error}</p>}

        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <div className="col-sm-6 col-lg-4" key={product._id}>
                <ProductCard
                  productId={product._id}
                  productImage={product.image}
                  productName={product.name}
                  productBrand={product.brand}
                  productPrice={product.price}
                  discountedPrice={calculateDiscountedPrice(
                    product.price,
                    product.discountPercentage
                  )}
                  discountPercentage={product.discountPercentage}
                  productRating={product.rating}
                  isWishlisted={product.isWishlisted}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
