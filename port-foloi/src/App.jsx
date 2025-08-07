import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx"; // Importing the Navbar component
import Hero from "./component/Hero/Hero.jsx"; // Importing the Hero component
import Bg from "./component/Background/Bg.jsx";
import Cards from "./component/cards/Cards.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx"; // Importing the Footer component

const App = () => {
  return (
    <div>
      <Bg></Bg>
      <Navbar></Navbar>
      <br />
      <Hero></Hero>
      <br />
      <br />
      <Cards></Cards>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;