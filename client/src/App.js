import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import AddIssue from "./Pages/AddIssue";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-issue" element={<AddIssue />} />
      </Routes>
    </Router>
  );
}

export default App;
