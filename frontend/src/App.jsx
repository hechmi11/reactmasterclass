import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/auth/Login";
import Products from "./pages/products/Products";
import AdminLayout from "./layouts/AdminLayout";
import Statistiques from "./pages/statistiques/Statistiques";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Products />} />
          <Route path="statistiques" element={<Statistiques />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
