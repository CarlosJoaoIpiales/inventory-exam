import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://firestore.googleapis.com/v1/projects/examen-88a3b/databases/(default)/documents/products'); // Reemplaza con tu URL de endpoint
        const data = response.data.documents.map(doc => ({
          ...doc.fields, // Asume una estructura de respuesta que necesitarás ajustar
          id: doc.name.split('/').pop() // Extrae el ID del documento del nombre
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="mb-4 p-4 shadow">
            <h3 className="text-xl font-semibold">{product.nombre.stringValue}</h3>
            <p>{product.descripcion.stringValue}</p>
            <p>Cantidad: {product.cantidad.integerValue}</p>
            <p>Precio: ${product.precio.doubleValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
