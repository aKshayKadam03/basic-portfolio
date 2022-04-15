import React, { useEffect } from "react";
// import ConfigSelector from "./utilities/configSelector";

import About from "./sections/about";
import Hero from "./sections/hero";
import Header from "./sections/header";

import "./App.css";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
