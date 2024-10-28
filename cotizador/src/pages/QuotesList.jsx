import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";

function QuotesList() {
  // Ejemplo de datos de cotizaciones
  const cotizaciones = [
    { cotizador: "Ander", fecha: "2023-09-27", precio: "1240$" },
    { cotizador: "Kevin", fecha: "2023-05-19", precio: "3720$" },
    { cotizador: "Manba", fecha: "2023-09-30", precio: "48$" },
    // Agrega más cotizaciones aquí si es necesario
  ];

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
              <th className="py-2 px-4">Cotizacion PDF</th>
              <th className="py-2 px-4">Precio de Cotización</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map((cotizacion, index) => (
              <tr key={index} className="text-center border-b">
                <td className="py-2 px-4">{cotizacion.cotizador}</td>
                <td className="py-2 px-4">{cotizacion.fecha}</td>
                <td className="py-2 px-4">
                  {/* Botón para descargar PDF */}
                  <button
                    className="bg-[#08b4c4] hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded"
                    onClick={() => {
                      // Lógica para descargar el PDF
                      console.log("Descargar PDF de", cotizacion.cotizador);
                    }}
                  >
                    Descargar PDF
                  </button>
                </td>
                <td className="py-2 px-4">{cotizacion.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuotesList;
