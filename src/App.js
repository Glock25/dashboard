import React from "react";


import { Routes, Route  } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";

import {useNavigate} from 'react-router-dom'


function App() {
  const navigate = useNavigate();
  return (
    <>
    
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />} ></Route>
          <Route path="/settings" exact element={<Settings />} ></Route>
          <Route path="/analytics" exact element={<Analytics />} ></Route>
          <Route path="/products" exact element={<Products />} ></Route>
        </Routes>
     
    </>
  );
}

export default App;
