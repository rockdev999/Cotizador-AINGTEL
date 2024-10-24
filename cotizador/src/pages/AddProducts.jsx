import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";
function AddProducts() {
  const { form, dataForm } = UseForm({
    name: "",
    cost: 0,
    price: 0,
    code: "",
    category: "",
    description: "",
  });
  const sendProduct = () => {
    console.log(form);
  };
  return (
    <div>
      <div className="flex flex-col items-center p-4 gap-4">
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="text"
          placeholder="Nombre Producto"
          name="name"
          onChange={dataForm}
        />
        <div className="flex flex-row justify-center gap-4">
          <input
            className="w-2/5 p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
            type="number"
            placeholder="Costo"
            step="0.01"
            name="cost"
            onChange={dataForm}
          />
          <input
            className="w-2/5 p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
            type="number"
            placeholder="Precio"
            step="0.01"
            name="price"
            onChange={dataForm}
          />
        </div>
        <Link className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg ">
          Seleccionar Imagen
        </Link>
        <input
          className="w-full p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700"
          type="text"
          placeholder="Codigo"
          name="code"
          onChange={dataForm}
        />
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
        <textarea
          className="w-full h-[200px] p-4 border-solid border-2 border-gray-400 rounded-lg placeholder:text-lg text-lg placeholder:text-gray-700 resize-none"
          name="description"
          onChange={dataForm}
          placeholder="Descripcion"
        ></textarea>
      </div>
      <div className="flex flex-col items-center">
        <Link
          className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
          onClick={sendProduct}
        >
          Anadir Producto
        </Link>
      </div>
    </div>
  );
}

export default AddProducts;
