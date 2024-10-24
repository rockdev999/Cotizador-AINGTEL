import { Link } from "react-router-dom";
// actualizado
function HomeAdmin() {
  return (
    <div className="my-8">
      <Link
        to="/add-products"
        className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
      >
        anadir proudctos
      </Link>
      <Link
        to="/add-dealers"
        className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
      >
        anadir vendedor
      </Link>
      <Link
        to="/list-dealers"
        className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
      >
        lista vendedor
      </Link>
      <Link
        to="/list-products"
        className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg"
      >
        lista vendedor
      </Link>
    </div>
  );
}

export default HomeAdmin;
