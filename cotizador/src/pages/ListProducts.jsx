import { products } from "../data";
function ListProducts() {
  return (
    <div className="flex flex-col items-center p-4 gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full p-3 border-solid  border-black rounded-md shadow-[1px_-1px_10px_1px_rgba(0,0,0,0.5)] flex gap-2"
        >
          <div className="w-2/5">
            <img src={product.image} alt="" />
          </div>
          <div>datos</div>
        </div>
      ))}
    </div>
  );
}

export default ListProducts;
