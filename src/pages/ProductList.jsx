import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Footer from "../components/Footer";

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
              <Sidebar
                productsData={data}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="col-md-9">
              <Products data={filteredData} loading={loading} error={error} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
