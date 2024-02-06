import React, { useState, useEffect } from 'react';
import { db } from '../data/firebaseConfig'; // Asegúrate de que esta ruta es correcta
import { collection, getDocs } from 'firebase/firestore';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollectionRef = collection(db, 'products'); // Asume que tu colección se llama 'products'
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <div>
        {products.map((product) => (
          <div key={product.id} className="mb-4 p-4 shadow">
            <h3 className="text-xl font-semibold">{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio: ${product.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
