import React from "react";
import MyTitle from "./components/MyTitle";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Protfolio from "./components/Protfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-[#090911] pb-12 md:pb-0 ">
      <MyTitle></MyTitle>
      <About></About>
      <Services></Services>
      <Skills></Skills>
      <Protfolio></Protfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
