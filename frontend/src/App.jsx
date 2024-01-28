import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// layouts
import AdminLayout from "./layouts/AdminLayout";
import MemberLayout from "./layouts/MemberLayout";
import HomeLayout from "./layouts/HomeLayout";

// zone admin prive
import LoginAdmin from "./pages/admin/auth/LoginAdmin"; // public
import Auto from "./pages/admin/auto/Auto";
import Statistiques from "./pages/admin/statistiques/Statistiques";
import Users from "./pages/admin/users/Users";
import ManageAssurance from "./pages/admin/assurance/ManageAssurance";
import CreateAssurance from "./pages/admin/assurance/CreateAssurance";
import EditAssurance from "./pages/admin/assurance/EditAssurance";

// zone member prive
import LoginMember from "./pages/member/auth/LoginMember"; // public
import RegisterMember from "./pages/member/auth/RegisterMember"; // public
import ProfileMember from "./pages/member/profile/Profile";

// zone accueil home public
import Home from "./pages/public/Home";
import Prestations from "./pages/public/Prestations";
import Services from "./pages/public/Services";
import Apropos from "./pages/public/Apropos";
import Location from "./pages/public/Location";
// espace client
import ContactUs from "./pages/public/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="prestations" element={<Prestations />} />
          <Route path="services" element={<Services />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="location" element={<Location />} />
        </Route>

        <Route path="/login-member" element={<LoginMember />} />
        <Route path="/register-member" element={<RegisterMember />} />
        <Route path="/login-admin" element={<LoginAdmin />} />

        <Route path="/dashboard-member" element={<MemberLayout />}>
          <Route index element={<ProfileMember />} />
        </Route>

        <Route path="/dashboard-admin" element={<AdminLayout />}>
          <Route index element={<Statistiques />} />
          <Route path="autos" element={<Auto />} />
          <Route path="users" element={<Users />} />
          <Route path="assurance" element={<ManageAssurance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
