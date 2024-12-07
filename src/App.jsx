import React from "react";
import "./App.css";
import "./assets/mdi/css/materialdesignicons.min.css";
import 'flowbite/dist/flowbite.min.css'; // Importez les styles de Flowbite ici
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import { Footer } from "flowbite-react";
import Footers from "./components/Footers";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About/>
      <Products/>
      <Footers/>
    </>
  );
}

export default App;
