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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Layout/Footer";
import Signup from "./pages/Sign-up";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Notfound from "./pages/Notfound";

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
        <Route path="sign" element={<Signup/>}/>
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />

        <Route path="*" element={<Notfound/>} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
