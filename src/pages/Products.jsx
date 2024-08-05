import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../features/products/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";

const Products = () => {
  const { products: productsData } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [filteredData, setFilteredData] = useState(productsData);

  const handleFilterChange = (newFilteredData) => {
    setFilteredData(newFilteredData);
  };

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProductFilter
              productsData={productsData}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-md-9">
            {/* <ProductCard data={filteredData} loading={loading} error={error} /> */}
            <ProductList filteredProducts={filteredData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
