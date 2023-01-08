import "./input.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Index from "./pages/Index";
import ProductEarphones from "./pages/ProductEarphones";
import ProductXX59Headphones from "./pages/ProductXX59Headphones";
import ProductXX99MarkOneHeadphones from "./pages/ProductXX99MarkOneHeadphones";
import ProductXX99MarkTwoHeadphones from "./pages/ProductXX99MarkTwoHeadphones";
import ProductZX7Speaker from "./pages/ProductZX7Speaker";
import ProductZX9Speaker from "./pages/ProductZX9Speaker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/earphones" element={<Earphones />} />
        <Route exact path="/headphones" element={<Headphones />} />
        <Route exact path="/product-earphones" element={<ProductEarphones />} />
        <Route
          exact
          path="/product-xx59-headphones"
          element={<ProductXX59Headphones />}
        />
        <Route
          exact
          path="/product-xx99-mark-one-headphones"
          element={<ProductXX99MarkOneHeadphones />}
        />
        <Route
          exact
          path="/product-xx99-mark-two-headphones"
          element={<ProductXX99MarkTwoHeadphones />}
        />
        <Route
          exact
          path="/product-zx7-speaker"
          element={<ProductZX7Speaker />}
        />

        <Route
          exact
          path="/product-zx9-speaker"
          element={<ProductZX9Speaker />}
        />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
