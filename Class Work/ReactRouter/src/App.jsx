import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Produts";
import Login from "./Components/Login";
import ProductsDetails from "./Components/ProductsDetails";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1>App Component</h1>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;