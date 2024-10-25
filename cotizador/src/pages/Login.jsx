import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { users } from "../data.js";
// sm:bg-red-500 md:bg-orange-500 lg:bg-pink-500 xl:bg-blue-500 2xl:bg-sky-500
function Login() {
  console.log(users);
  const [view, setView] = useState(false);
  return (
    <div className=" sm:w-full h-[70vh] sm:h-[77vh] flex items-center justify-center">
      <div className="w-full h-full sm:w-[50%] md:w-[42%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] sm:p-3 sm:border-solid  sm:border-current sm:rounded-md sm:shadow-[0px_-1px_5px_1px_rgba(0,0,0,0.5)] flex flex-col items-center sm:h-[75%]">
        <div className="flex flex-col items-center py-9 gap-4 sm:py-2">
          <div className="w-28">
            <img className="w-full h-full" src="about.png" alt="" />
          </div>
          <p className="text-2xl">LOGIN</p>
        </div>
        <div className="w-[85%] flex flex-col justify-center gap-4">
          <div className="w-[100%] px-4 py-2 flex flex-row items-center border border-2 border-gray-300 rounded-md ">
            <input
              className="w-full m-1 mr-2 text-lg placeholder:text-lg focus:outline-none bg-inherit"
              type="text"
              placeholder="Usuario"
            />
            <FaUser />
          </div>
          <div className="w-[100%] px-4 py-2 flex flex-row items-center border border-2 border-gray-300 rounded-md ">
            <input
              className="w-full m-1 mr-2 text-lg placeholder:text-lg focus:outline-none bg-inherit"
              type={view ? "text" : "password"}
              placeholder="Contraseña"
            />
            <div
              onClick={() => {
                setView(!view);
              }}
            >
              {view ? (
                <FaEye className="cursor-pointer" />
              ) : (
                <FaEyeSlash className="cursor-pointer" />
              )}
            </div>
          </div>
        </div>
        <button className="my-3 py-4 px-20 bg-[#08b4c4] border rounded-full font-bold text-white active:bg-[#057a82]">
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;
