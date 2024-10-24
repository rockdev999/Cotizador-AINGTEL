import { dealers } from "../data";
import { Link } from "react-router-dom";
// actualizado
function ListDealers() {
  console.log(dealers);
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      {dealers.map((dealer) => (
        <div
          key={dealer.ci}
          className="w-full p-3 border-solid  border-black rounded-md shadow-[1px_-1px_10px_1px_rgba(0,0,0,0.5)]"
        >
          <div className="w-full h-full m-1 flex items-center">
            <img className="m-1 h-full w-4" src="icon-user.png" alt="" />
            <p>Nombre: {dealer.name}</p>
          </div>
          <div className="w-full h-full m-1 flex items-center">
            <div className="w-full flex items-center">
              <img className="m-1 h-full w-4" src="icon-phone.png" alt="" />
              <p>Celular: {dealer.phone}</p>
            </div>
            <div className="w-full flex items-center">
              <img className="m-1 h-full w-6" src="icon-dni.png" alt="" />
              <p>C.I.: {dealer.ci}</p>
            </div>
          </div>

          <div className="w-full h-full m-1 flex items-center">
            <img className="mx-1 h-full w-5" src="icon-email.png" alt="" />
            <p>
              Correo:
              <strong> {dealer.email}</strong>
            </p>
          </div>
          <div className="w-4/5 m-5 flex justify-evenly">
            <Link className="p-3 rounded-md bg-[#08b4c4]">Actualizar</Link>
            <Link className="p-3 rounded-md bg-red-500">Eliminar</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListDealers;
