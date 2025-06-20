import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/HomePage";
import { Product } from "../pages/Product";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/produto/:id/:origem" element={<Product />} />
    </Routes>
  );
}
