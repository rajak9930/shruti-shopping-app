import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ProductDetails from "./pages/Product-details";
import Header from "./Layout/Header";
import CatDetails from "./pages/Cat-details";
import Redux from "./pages/Redux";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="redux" element={<Redux />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="details/:id" element={<ProductDetails />} />
        <Route path="cat/:cat" element={<CatDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
