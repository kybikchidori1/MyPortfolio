import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
