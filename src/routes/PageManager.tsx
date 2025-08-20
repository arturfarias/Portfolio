import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";

const PageManager: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/profile" replace />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PageManager;
