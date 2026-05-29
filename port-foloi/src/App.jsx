import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Bg from "./component/Background/Bg.jsx";
import Cards from "./component/cards/Cards.jsx";
import Skills from "./component/Skills/Skills.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Bg />
      <Navbar />
      <Hero />
      <Cards />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;