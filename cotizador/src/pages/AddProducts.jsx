import React from "react";
import { Link } from "react-router-dom";
function AddProducts() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Costo" name="" id="" />
        <input type="number" placeholder="Precio" name="" id="" />
        <Link>Seleccionar Imagen</Link>
        <input type="text" placeholder="Codigo" />
        <div>
          <label htmlFor="">Categoria</label>
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
        <textarea name="" id="" placeholder="Descripcion"></textarea>
      </div>
    </div>
  );
}

export default AddProducts;
