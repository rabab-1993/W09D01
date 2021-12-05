import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import './App.css';
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Task from "./Components/task/Task";


function App() {
  return (
    <div className="App">
  <Home />
  <Routes>
  <Route exact path="/login" element={<Login  />} />
      <Route exact path="/register" element={<Register  />} />
      <Route exact path="/task" element={<Task  />} />
  </Routes>
    </div>
  );
}

export default App;
