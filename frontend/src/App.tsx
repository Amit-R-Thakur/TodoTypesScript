import React from "react";
import "./App.css";
import GoogleSignIn from "./components/GoogleSignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GoogleSignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
