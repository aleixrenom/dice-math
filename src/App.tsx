import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Equation from "./modules/Equation";
import History from "./modules/History";
import Numpad from "./modules/Numpad";

function App() {
  return (
    <div className="App">
      <History />
      <Equation />
      <Numpad />
    </div>
  );
}

export default App;
