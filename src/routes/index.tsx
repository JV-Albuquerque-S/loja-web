import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/HomePage";
import { Product } from "../pages/Product";
import { CartPage } from "../pages/Cart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/produto/:id/:origem" element={<Product />} />
      <Route path="/carrinho" element={<CartPage />} />
    </Routes>
  );
}
