import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home";
import Layout from "@/layout/Layout";
import SingleProduct from "./pages/home/single-product/single-product";
import { Account } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
