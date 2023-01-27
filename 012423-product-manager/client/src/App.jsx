import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import NavBar from "./components/NavBar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
              <Routes>
                  <Route path="/" element={<Navigate to="/products" />} />
                  <Route path="/products" element={<Products />}>
                    <Route index element={<AllProducts />} />
                    <Route path='new' element={<CreateProduct />} />
                    <Route path=':id' element={<OneProduct />} />
                    <Route path=':id/edit' element={<UpdateProduct />} />
                  </Route>
              </Routes>
            </div>
        </div>
    );
};

export default App;
