import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/projects";

// import React from "react";
const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default App;
