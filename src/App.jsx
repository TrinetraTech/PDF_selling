import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage />
      <About/>
      <Contact/>
      <Footer/>
    </> 
  );
}

export default App;
