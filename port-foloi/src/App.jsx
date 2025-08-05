import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx"; // Importing the Navbar component
import Hero from "./component/Hero/Hero.jsx"; // Importing the Hero component
import Bg from "./component/background/Bg.jsx";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Bg></Bg>
    </div>
  );
}

export default App;