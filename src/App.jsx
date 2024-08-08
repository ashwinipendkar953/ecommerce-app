import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./features/products/productSlice.js";
import { fetchCategories } from "./features/categories/categorySlice.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryName" element={<Products />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
