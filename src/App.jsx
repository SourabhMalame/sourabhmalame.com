import "./App.css";
import Cart from "./components/Cart";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
