import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import "./App.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
