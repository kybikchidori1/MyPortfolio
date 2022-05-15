import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
