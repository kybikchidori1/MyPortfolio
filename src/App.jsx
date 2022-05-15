import React from "react";
import Hero from "./components/Hero/Hero";
import ITberries from "./components/ITberries/ITberries";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <ITberries />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
