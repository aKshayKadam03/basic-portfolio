import React, { useEffect } from "react";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

import Skills from "./sections/skills";
import Hero from "./sections/hero";
import Header from "./sections/header";
import Footer from "./sections/footer";

import "./App.css";
import Project from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
