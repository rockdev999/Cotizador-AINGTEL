import { useState } from "react";
import { Link } from "react-router-dom";
// actualizado
function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // sm:bg-red-500 md:bg-orange-500 lg:bg-pink-500 xl:bg-blue-500 2xl:bg-sky-500
  return (
    <nav className="w-full bg-neutral-200">
      <div className="mx-auto w-full">
        <div className="w-full flex mx-auto justify-between">
          {/* Primary menu and logo */}
          <div className="w-full flex items-center justify-between gap-16 my-5 px-10">
            {/* logo */}
            <div>
              <Link
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <span>LOGO</span>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 w-[70%] flex justify-between">
              <div className="flex gap-24">
                <div>
                  <Link
                    to="/"
                    className="py-2 px-3 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold"
                  >
                    Inicio
                  </Link>
                </div>
                <div>
                  <Link
                    to="/about"
                    className="py-2 px-3 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold"
                  >
                    Quienes Somos
                  </Link>
                </div>
                <div>
                  <Link className="py-2 px-3 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold">
                    Productos
                  </Link>
                </div>
              </div>
              <div>
                <Link
                  to="/login"
                  className=" p-2 border-solid rounded-lg bg-[#08b4c4] active:bg-[#057a82]"
                >
                  Iniciar Sesion
                </Link>
              </div>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center pr-6">
              <Link onClick={() => setToggleMenu(!toggleMenu)}>
                <img src="icon-menu.png" className="h-7 w-[40px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-2  origin-top duration-500 ${
          !toggleMenu ? "h-0" : "h-[21%]"
        }`}
      >
        <div className="px-9">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setToggleMenu(false)}
              className="py-1 px-1 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              onClick={() => setToggleMenu(false)}
              className="py-1 px-1 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold"
            >
              Quienes Somos
            </Link>
            <Link
              to=""
              onClick={() => setToggleMenu(false)}
              className="py-1 px-1 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold"
            >
              Productos
            </Link>
            <Link
              to="/login"
              onClick={() => setToggleMenu(false)}
              className="py-1 px-1 rounded hover:text-blue-700 hover:underline hover:underline-offset-8 font-semibold"
            >
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
