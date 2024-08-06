import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryName" element={<Products />} />
          <Route path="/products/details" element={<ProductDetails />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
