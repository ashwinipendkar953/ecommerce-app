import ProductFilterForm from "../components/ProductFilterForm";
import ProductList from "../features/products/ProductList";

const Products = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ProductFilterForm />
          </div>
          <div className="col-md-9">
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
