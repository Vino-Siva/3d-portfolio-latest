import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/projects";
import Footer from "./sections/Footer";

// import React from "react";
const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
