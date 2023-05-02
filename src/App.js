import React from "react";


import { Routes, Route  } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

import {useNavigate} from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  return (
    <>
    
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />} ></Route>
          <Route path="/settings" exact element={<Settings />} ></Route>
        </Routes>
     
    </>
  );
}

export default App;
