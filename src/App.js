import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.body.style.backgroundColor = "#042743";
    document.body.style.color = "white";
    document.title = "TextUtils";
  }, []);

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#bab6d1";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    }
  };

  return (
    <Router>
      <Navbar
        title="textUtils"
        about="About textUtils"
        mode={mode}
        changeMode={changeMode}
      />
      <Routes>
        <Route exact path="/" element={<TextForm title="Enter text to analyze" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
