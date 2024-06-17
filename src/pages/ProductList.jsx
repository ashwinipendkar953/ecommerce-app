import { useState } from "react";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://ecommerce-api-4rav.onrender.com/api/products"
  );
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (newFilteredData) => {
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Header />
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
              <ProductCard
                data={filteredData}
                loading={loading}
                error={error}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
