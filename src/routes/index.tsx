import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/HomePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
