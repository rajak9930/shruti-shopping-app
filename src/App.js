import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetails from "./pages/Product-details";
import Header from "./Layout/Header";
import CatDetails from "./pages/Cat-details";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="details/:id" element={<ProductDetails />} />
        <Route path="cat/:cat" element={<CatDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
