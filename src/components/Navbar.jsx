import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Asumiendo la implementación del hook de autenticación

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      // Opcional: Redirigir al usuario después del logout
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Inventario de Bodega</Link>
        <Link to="/products" className="text-xl font-bold">Lista de Productos</Link>
        <div>
          {currentUser ? (
            <>
              <Link to="/dashboard" className="px-4 py-2 hover:bg-gray-700 rounded">Dashboard</Link>
              <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-700 rounded">Cerrar Sesión</button>
            </>
          ) : (
            <Link to="/login" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">Iniciar Sesión</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
