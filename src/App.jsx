import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { render } from "react-dom";

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

const App = () => {
  render (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/login" element={<Login />}> </Route>
      <Route path="/register" element={<Register />}> </Route>
      <Route path="/cart" element={<Cart />}> </Route>
      <Route path="/product" element={<Product />}> </Route>
      <Route path="/productlist" element={<ProductList />}> </Route>      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
  );
}
export default App;
