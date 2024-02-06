// src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../data/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    setProducts(products.filter((product) => product.id !== id)); // Actualizar el estado local
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard de Productos</h2>
      <button
        onClick={() => navigate('/add-product')}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Nuevo Producto
      </button>
      {products.map((product) => (
        <div key={product.id} className="mb-4 p-4 shadow flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio: ${product.precio}</p>
          </div>
          <div>
            <button
              onClick={() => navigate(`/edit-product/${product.id}`)}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
