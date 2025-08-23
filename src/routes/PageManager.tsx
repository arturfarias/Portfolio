import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Articles from "../pages/Articles";
import Certificates from "../pages/Certificates";
import Courses from "../pages/Courses";

import Myfood from "../pages/Projects/Myfood";
import Arko from "../pages/Projects/Arko";


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
            <Route path="/articles" element={<Articles />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/courses" element={<Courses />} />

            <Route path="/myfood" element={<Myfood />} />
            <Route path="/arko" element={<Arko />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PageManager;
