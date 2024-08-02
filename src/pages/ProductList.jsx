import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://ecommerce-api-teal.vercel.app/api/products"
  );
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (newFilteredData) => {
    setFilteredData(newFilteredData);
  };

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProductFilter
              productsData={data}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-md-9">
            <ProductCard data={filteredData} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
