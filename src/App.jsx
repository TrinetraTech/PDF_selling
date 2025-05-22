import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage />
      <h1 className="text-3xl font-bold ">Hello world!</h1>
    </>
  );
}

export default App;
