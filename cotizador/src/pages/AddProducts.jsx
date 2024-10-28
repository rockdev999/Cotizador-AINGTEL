import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseForm from "../components/addproducts/UseForm";
import { AdminAuthenticationContext } from "../contexts/AdminAuthentication";
// actualizado
function AddProducts() {
  const [modal, setModal] = useState(false);
  const [correct, setCorrect] = useState(false);
  const { form, dataForm } = UseForm({
    name: "",
    cost: 0,
    price: 0,
    image: null,
    code: "",
    category: "",
    description: "",
  });
  const navigate = useNavigate();
  const { adminAuth, setAdminAuth } = useContext(AdminAuthenticationContext);
  useEffect(
    function () {
      if (!adminAuth) {
        navigate("/login");
      }
    },
    [adminAuth]
  );
  const sendProduct = () => {
    const { name, cost, price, image, code, category, description } = form;
    if (
      name === "" ||
      cost === 0 ||
      price === 0 ||
      image === null ||
      code === "" ||
      category === "" ||
      description === ""
    ) {
      setModal(true);
      setCorrect(false);
      return;
    } else {
      setModal(true);
      setCorrect(true);
      console.log(form);
      setTimeout(() => {
        setModal(false);
      }, 2000);
      // resetForm();
    }
  };
  return (
    <div className="w-full flex flex-col items-center">
      <p className="pt-4 border-b-4 border-[#08b4c4] text-lg font-medium">
        AGREGAR PRODUCTO
      </p>
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
        <div className="w-[95%] flex flex-col">
          <input
            className=" file:bg-[#08b4c4] file:py-4 file:px-3 file:border file:border-0 file:rounded-lg file:active:bg-[#057a82] file:cursor-pointer"
            type="file"
            name="image"
            onChange={dataForm}
          />
          <p className="px-1 text-sm text-gray-500 dark:text-gray-500">
            PNG, JPG o JPEG.
          </p>
        </div>
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
          className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg active:bg-[#057a82] cursor-pointer"
          onClick={sendProduct}
        >
          Añadir Producto
        </Link>
      </div>
      {modal ? (
        <div
          className={`flex absolute w-full h-full bg-transparent bg-gray-700 bg-opacity-50 justify-center items-center`}
        >
          <div
            className={`flex p-2 w-[70%] ${
              correct
                ? "h-[22%] sm:w-[50%] lg:w-[35%] xl:w-[27%]"
                : "h-[25%] md:h-[30%]"
            } bg-white  flex-col justify-center items-center boder rounded-md md:w-[50%] md:w-[40%] xl:w-[35%]`}
          >
            <div className="w-[22%] h-[36%]">
              {correct ? (
                <img className="w-full h-full" src="correct.png" alt="" />
              ) : (
                <img className="w-full h-full" src="incorrect.png" alt="" />
              )}
            </div>
            <p>
              {correct ? (
                <strong>Producto agregado</strong>
              ) : (
                <strong>Verifique campos</strong>
              )}
            </p>
            {correct ? (
              <p className="text-center text-gray-500 text-sm">
                El producto se agrego satisfactoriamente
              </p>
            ) : (
              <p className="text-center text-gray-500 text-sm">
                Verifique que todos los campos esten llenados.
              </p>
            )}
            {!correct ? (
              <button
                className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg active:bg-[#057a82] cursor-pointer"
                onClick={() => setModal(false)}
              >
                Aceptar
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AddProducts;
