import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage'
import Dashboard from './pages/DashboardPage'
import Home from './pages/Home'
import AddProductPage from './pages/AddProductPage'; // Asegúrate de ajustar la ruta de importación
import EditProductPage from './pages/EditProductPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        {" "}
        {/* Define las rutas de la aplicación */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
}

export default App;
