import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Services from "./component/Services";
import Contact from "./component/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/skills" element={<Skills />} exact />
          <Route path="/services" element={<Services />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
