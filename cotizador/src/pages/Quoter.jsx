import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";
import { useNavigate } from "react-router-dom";

function Quoter() {
  const navigate = useNavigate();
  const { form, dataForm } = UseForm({
    category: "",
    product: "",
    lot: "",
  });
  const sendData = () => {
    navigate("/additional-data");
    console.log(form);
  };
  return (
    <div>
      <div className="flex flex-col items-center p-4 gap-4">
        <h2 className="text-center font-extrabold mb-2">
          Formulario de Cotización
        </h2>
        <div className="mx-4 w-full border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg">
          <select
            className="w-[95%] bg-transparent p-4 outline-none focus:ring-0 text-gray-700"
            name="category"
            onChange={dataForm}
          >
            <option value="0">Categoría</option>
            <option value="1">Videovigilancia</option>
            <option value="2">Redes y Comunicaciones</option>
            <option value="3">Seguridad Electrónica</option>
            <option value="4">Sistemas Domóticos</option>
            <option value="5">Sistemas para Energía y Respaldo</option>
            <option value="6">Biométricos</option>
            <option value="7">Sistemas Eléctricos</option>
          </select>
        </div>
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="text"
          placeholder="Producto"
          name="product"
          onChange={dataForm}
        />
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="number"
          placeholder="Cantidad"
          name="lot"
          onChange={dataForm}
        />
      </div>

      {/* Contenedor para el botón Agregar */}
      <div className="flex flex-col items-center ">
        <div className="flex space-x-4 items-center">
          <label className="block text-sm font-medium text-gray-700">
            Precio Unitario:
          </label>
          <div>
            <p className="bg-gray-200 text-center py-2 rounded"> XX Bs</p>
          </div>
        </div>
        {/* Botón de "Guardar", que en realidad es un enlace (Link) con una función asociada */}
        <Link
          className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg mb-3"
          onClick={sendData}
        >
          Agregar
        </Link>
      </div>

      <div className="w-full p-4 flex justify-between border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700 mb-2">
        <div>
          <p className="font-semibold">Producto 1</p>
          <p className="text-gray-500">Precio total</p>
        </div>
        <button className="rounded-full p-2">
          <img src="icono-cerrar.png"></img>
        </button>
      </div>

      <div className="w-full p-4 flex justify-between border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700 mb-2">
        <div>
          <p className="font-semibold">Producto 2</p>
          <p className="text-gray-500">Precio total</p>
        </div>
        <button className="rounded-full p-2">
          <img src="icono-cerrar.png"></img>
        </button>
      </div>

      <div className="flex flex-col items-center ">
        <div className="flex space-x-4 items-center">
          <label className="block text-sm font-medium text-gray-700">
            Precio Total:
          </label>
          <div>
            <p className="bg-gray-200 text-center py-2 rounded"> XXX Bs</p>
          </div>
        </div>
        {/* Botón de "Guardar", que en realidad es un enlace (Link) con una función asociada */}
        <Link
          className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg mb-3"
          onClick={sendData()}
        >
          Confirmar Pedido
        </Link>
      </div>
    </div>
  );
}

export default Quoter;
