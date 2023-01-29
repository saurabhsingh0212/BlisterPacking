import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CareerPage from "pages/CareerPage";
import Home from "pages/HomePage"
import AboutUs from "pages/AboutUs";
import FAQ from "pages/FAQ.js";
import ContactUs from "pages/ContactUs.js";
import OurFacilities from "pages/OurFacilities";
import Products  from "pages/ProductsDesc";

export default function App() {
  
  return (
    <>
      <GlobalStyles />
      <Router >
        <Routes>
          <Route path="/career" element={<CareerPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/facilities" element={<OurFacilities />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}
