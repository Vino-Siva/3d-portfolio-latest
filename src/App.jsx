import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

// import React from "react";
const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
