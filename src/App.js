import "./App.css";
import * as React from "react";
import Navbar from "./Component/Navbar";
import Aboutme from "./Component/Aboutme";
import Experience from "./Component/Experience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-bg">
        <div className="App-container">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Aboutme />} />
              <Route path="/Experience" element={<Experience />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
