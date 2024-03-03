import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/MainPages/Home";
import InsertProduct from "./components/MainPages/InsertProduct";
import EditProduct from "./components/MainPages/EditProduct";
import Cart from "./components/MainPages/Cart";

const Landing = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/enterproduct" element={<InsertProduct />}></Route>
          <Route exact path="/editproduct" element={<EditProduct />}></Route>
          <Route exact path="/getcart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
