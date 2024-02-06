import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../data/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddProductPage = () => {
  const [nombre, setName] = useState("");
  const [descripcion, setDescription] = useState("");
  const [cantidad, setQuantity] = useState("");
  const [precio, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    try {
      await addDoc(collection(db, "products"), {
        nombre,
        descripcion,
        cantidad: parseInt(cantidad, 10), // Asegúrate de convertir la cantidad a un número
        precio: parseFloat(precio), // Asegúrate de convertir el precio a un número
      });
      navigate("/dashboard"); // Navega de regreso al dashboard después de agregar el producto
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleReset = () => {
    // Limpia los campos del formulario
    setName("");
    setDescription("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Campos del formulario: nombre, descripción, cantidad, precio */}
          {/* Ejemplo para el campo nombre: */}
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-name"
              type="text"
              placeholder="Nombre del producto"
              value={nombre}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Repite la estructura anterior para los demás campos */}
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Descripción
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-description"
              type="text"
              placeholder="Descripción del producto"
              value={descripcion}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-quantity"
            >
              Cantidad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-quantity"
              type="number"
              placeholder="Cantidad"
              value={cantidad}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-price"
            >
              Precio
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-price"
              type="text"
              placeholder="Precio"
              value={precio}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Guardar
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleReset}
          >
            Borrar Campos
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Regresar al Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
