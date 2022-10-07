import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index, Product, Payment } from "./importPages";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Routing = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default Routing;
