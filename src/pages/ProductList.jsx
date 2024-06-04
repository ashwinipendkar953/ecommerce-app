import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import Header from "../components/Header";

const ProductList = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductList;
