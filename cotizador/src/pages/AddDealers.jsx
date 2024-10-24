import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";
function AddDealers() {
  const { form, dataForm } = UseForm({
    ci: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const sendData = () => {
    console.log(form);
  };
  return (
    <div>
      <div className="flex flex-col items-center p-4 gap-4">
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="number"
          placeholder="Carnet de Identidad"
          name="ci"
          onChange={dataForm}
        />
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
          type="password"
          placeholder="Contraseña"
          name="password"
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
          name="address"
          onChange={dataForm}
        />
      </div>
      <div className="flex flex-col items-center">
        <Link
          className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
          onClick={sendData}
        >
          GUARDAR
        </Link>
      </div>
    </div>
  );
}
// actualizado

export default AddDealers;
