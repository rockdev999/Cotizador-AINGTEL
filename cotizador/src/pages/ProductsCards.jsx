import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";

const initialProducts = [
  {
    id: 1,
    name: "Camara Dahua",
    category: "Videovigilancia",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "SwtichMikrotik",
    category: "Redes y Comunicaciones",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Central de Alarmas",
    category: "Seguridad Electrónica",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Video Portero",
    category: "Sistemas Domóticos",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Paneles Solares",
    category: "Sistemas para Energía y Respaldo",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Biometrico ZKTeco",
    category: "Biométricos",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Cable electrico",
    category: "Sistemas Eléctricos",
    imageUrl: "https://via.placeholder.com/150",
  },

  // Agrega más productos si lo deseas
];

function ProductCards() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border border-black rounded-lg shadow-lg p-4"
          >
            {/* Imagen del producto */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />

            {/* Información del producto */}
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">{product.category}</p>

            {/* Botón de acción */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
