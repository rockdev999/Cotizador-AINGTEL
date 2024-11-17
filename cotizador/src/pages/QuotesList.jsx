import React from "react";
import { dealers } from "../data";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";

function QuotesList() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-2">
        Registro de Cotizaciones
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-[#08b4c4] text-gray-900">
              <th className="py-2 px-4">Cotizador</th>
              <th className="py-2 px-4">Fecha de Cotización</th>
              <th className="py-2 px-4">Cotización PDF</th>
              <th className="py-2 px-4">Precio de Cotización</th>
            </tr>
          </thead>
          <tbody>
            {/* Iteramos sobre cada dealer en el array `dealers` */}
            {dealers.map((dealer, index) => (
              <tr key={index} className="text-center border-b">
                {/* Columna del nombre del dealer */}
                <td className="py-2 px-4">{dealer.name}</td>

                {/* Columna de fecha de cotización */}
                {/* Aquí asumimos que `dealer` tiene una propiedad `fecha`. Si no, puedes agregar una fecha ficticia */}
                <td className="py-2 px-4">{dealer.fecha || "2023-09-27"}</td>

                {/* Columna para botón de descarga del PDF */}
                <td className="py-2 px-4">
                  <button
                    className="bg-[#08b4c4] hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded"
                    onClick={() => {
                      // Lógica para descargar el PDF de la cotización del dealer
                      console.log("Descargar PDF de", dealer.name);
                    }}
                  >
                    Descargar PDF
                  </button>
                </td>

                {/* Columna de precio de cotización */}
                {/* Asumimos que `dealer` tiene una propiedad `precio`, o agregamos un valor de ejemplo */}
                <td className="py-2 px-4">{dealer.precio || "1240$"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuotesList;
