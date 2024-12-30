import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import Legend from "./Legend/Legend";
import Tracker from "./Traker/Tracker";
// import BackImg from "../public/img/back.png";
import "./style.scss";


const App = () => {
 
  return (
    <div className="app">
      <Legend />
      <Tracker />
    </div>
  )
};

export default App;
