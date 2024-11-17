import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";

function AdditionalData() {
  const { form, dataForm } = UseForm({
    name: "",
    email: "",
    phone: "",
    delivery_address: "",
  });
  const sendData = () => {
    console.log(form);
  };

  return (
    <div>
      <div className="flex flex-col items-center p-4 gap-4">
        <h2 className="text-center font-extrabold mb-1">Datos Adicionales</h2>
        <h2 className="text-center font-normal mb-1">Comprador</h2>
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={dataForm}
        />
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="email"
          placeholder="Correo Electronico"
          name="email"
          onChange={dataForm}
        />
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="tel"
          placeholder="Telefono"
          name="phone"
          onChange={dataForm}
        />
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="text"
          placeholder="Dirección"
          name="delivery_address"
          onChange={dataForm}
        />
      </div>
      <div className="flex flex-col items-center">
        <Link
          className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
          onClick={sendData} // Cuando se hace clic, llama a la función 'sendData' para enviar los datos.
        >
          Confirmar Pedido
        </Link>
      </div>
    </div>
  );
}

export default AdditionalData;
