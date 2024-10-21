// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./pages/Header";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/Addproduct";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

<Route
            path="/addproduct"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
