import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
