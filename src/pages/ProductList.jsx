import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://4c7ed629-ffb2-449c-83b8-7974797d0510-00-2b5gxma3p76yy.sisko.replit.dev/api/products"
  );
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (newFilteredData) => {
    setFilteredData(newFilteredData);
  };

  return (
    <>
      <Header />
      <main>
        <div className="row">
          <div className="col-md-3">
            <Sidebar productsData={data} onFilterChange={handleFilterChange} />
          </div>
          <div className="col-md-9">
            <Products data={filteredData} loading={loading} error={error} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductList;
