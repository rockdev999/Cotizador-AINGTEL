import React, { useState, useEffect, useContext } from "react";
import { DealerAuthenticationContext } from "../contexts/DealerAuthentication";
import axios from "axios";
import UseForm from "../components/addproducts/UseForm";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

const Quoter = () => {
  const { dealerAuth } = useContext(DealerAuthenticationContext);
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosEjemplo, setProductosEjemplo] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(0);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(0.0);
  const [listaProductos, setListaProductos] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0.0);
  const [modificar, setModificar] = useState(false);
  const [modal, setModal] = useState(false);
  const [newInput, setNewInput] = useState(0.0);
  const { form, dataForm, resetForm } = UseForm({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
  });
  // Simulación de datos (reemplaza esto con una llamada a tu API)
  useEffect(
    function () {
      if (!dealerAuth) {
        navigate("/login");
      }
    },
    [dealerAuth]
  );
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((result) => {
        setCategorias(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((result) => {
        setProductosEjemplo(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (categoriaSeleccionada) {
      // Simulación de productos por categoría (reemplaza esto con una llamada a tu API)
      axios
        .get("http://localhost:3000/products")
        .then((result) => {
          setProductosEjemplo(result.data);
          // console.log("adsasd");
          // console.log(productosEjemplo);
        })
        .catch((error) => console.log(error));
      setProductos(
        productosEjemplo.filter(
          (p) => p.category === parseInt(categoriaSeleccionada)
        )
      );
    } else {
      setProductos([]);
    }
  }, [categoriaSeleccionada]);

  const handleAgregarProducto = () => {
    if (productoSeleccionado && cantidad > 0) {
      const productoConCantidad = {
        ...productoSeleccionado,
        cantidad,
        precio: productoSeleccionado.price * cantidad,
      };
      setPrecioTotal(precioTotal + precio);
      setListaProductos([...listaProductos, productoConCantidad]);
      setCantidad(1); // Reiniciar cantidad
    }
  };

  const handleEliminarProducto = (code) => {
    setListaProductos(listaProductos.filter((prod) => prod.code !== code));
  };

  const handleModificar = () => {
    setModificar(true);
  };
  const handleAceptar = () => {
    setPrecioTotal(newInput);
    setModificar(false);
  };
  const handleCliente = () => {
    setModal(true);
  };
  // const handleGenerarPDF = () => {
  //   const doc = new jsPDF();

  //   // Título
  //   doc.setFontSize(18);
  //   doc.text("Cotización de Productos", 14, 22);

  //   // Información del comprador
  //   doc.setFontSize(12);
  //   doc.text(`Cliente: ${form.nombre}`, 14, 30);
  //   doc.text(`Correo: ${form.correo}`, 14, 36);
  //   doc.text(`Teléfono: ${form.telefono}`, 14, 42);
  //   doc.text(`Dirección: ${form.direccion}`, 14, 48);

  //   // Tabla de productos (sin imágenes)
  //   doc.autoTable({
  //     startY: 55,
  //     head: [["Producto", "Cantidad", "Precio Unitario", "Total"]],
  //     body: listaProductos.map((prod) => [
  //       prod.name,
  //       prod.cantidad,
  //       `${prod.price.toFixed(2)} Bs.`,
  //       `${(prod.price * prod.cantidad).toFixed(2)} Bs.`,
  //     ]),
  //   });

  //   // Precio total
  //   doc.text(
  //     `Precio Total: ${precioTotal.toFixed(2)} Bs.`,
  //     14,
  //     doc.lastAutoTable.finalY + 10
  //   );

  //   // Agregar imágenes
  //   // listaProductos.forEach((prod, index) => {
  //   //   if (prod.image) {
  //   //     const img = new Image();
  //   //     img.src = prod.image; // URL de la imagen

  //   //     img.onload = function () {
  //   //       // Verifica si la imagen se cargó correctamente
  //   //       if (!img.complete || img.naturalWidth === 0) {
  //   //         console.error(`Error cargando la imagen: ${prod.image}`);
  //   //         return; // Si la imagen no se carga, no intentamos agregarla al PDF
  //   //       }

  //   //       // Determinar el formato de la imagen según su extensión
  //   //       let imgFormat = "JPEG"; // Predeterminado
  //   //       const extension = prod.image.split(".").pop().toLowerCase();

  //   //       if (extension === "png") {
  //   //         imgFormat = "PNG"; // Si es PNG
  //   //       } else if (extension === "jpg" || extension === "jpeg") {
  //   //         imgFormat = "JPEG"; // Si es JPG o JPEG
  //   //       }

  //   //       // Cuando la imagen se carga, se agrega al PDF
  //   //       doc.addImage(
  //   //         img,
  //   //         imgFormat,
  //   //         14,
  //   //         doc.lastAutoTable.finalY + 15 + index * 60,
  //   //         50,
  //   //         50
  //   //       );

  //   //       // Si es la última imagen, guarda el PDF
  //   //       if (index === listaProductos.length - 1) {
  //   //         doc.save("cotizacion.pdf");
  //   //       }
  //   //     };

  //   //     img.onerror = function () {
  //   //       console.error(`Error al cargar la imagen: ${prod.image}`);
  //   //     };
  //   //   }
  //   // });

  //   // Si no hay imágenes, guarda el PDF de inmediato
  //   if (listaProductos.every((prod) => !prod.image)) {
  //     doc.save("cotizacion.pdf");
  //   }
  // };
  const handleGenerarPDF = async () => {
    const doc = new jsPDF();

    // Título
    doc.setFontSize(18);
    doc.text("Cotización de Productos", 14, 22);

    // Información del comprador
    doc.setFontSize(12);
    doc.text(`Cliente: ${form.nombre}`, 14, 30);
    doc.text(`Correo: ${form.correo}`, 14, 36);
    doc.text(`Teléfono: ${form.telefono}`, 14, 42);
    doc.text(`Dirección: ${form.direccion}`, 14, 48);

    // Establecer el inicio de la tabla
    let yOffset = 55;

    // Tabla de productos
    for (let i = 0; i < listaProductos.length; i++) {
      const prod = listaProductos[i];

      // Cargar la imagen del producto
      const img = new Image();
      img.src = prod.image;

      img.onload = () => {
        // Agregar cada fila de productos
        doc.setFontSize(10);
        doc.text(prod.name, 14, yOffset);
        doc.text(prod.cantidad.toString(), 50, yOffset);
        doc.text(`${prod.price.toFixed(2)} Bs.`, 80, yOffset);
        doc.text(
          `${(prod.price * prod.cantidad).toFixed(2)} Bs.`,
          130,
          yOffset
        );

        // Agregar la imagen al PDF (en una posición ajustada)
        doc.addImage(img, "PNG", 150, yOffset - 4, 30, 30); // Ajusta las coordenadas y tamaño de la imagen
        yOffset += 35; // Espacio entre productos

        // Asegurarse de que el PDF se guarde solo cuando se haya cargado la última imagen
        if (i === listaProductos.length - 1) {
          doc.save("cotizacion.pdf");
        }
      };

      img.onerror = (err) => {
        console.error("Error al cargar la imagen", err);
        // Si ocurre un error al cargar la imagen, puedes seguir con el resto de la tabla
        if (i === listaProductos.length - 1) {
          doc.save("cotizacion.pdf");
        }
      };
    }
  };

  const sendCliente = () => {
    const { nombre, correo, telefono, direccion } = form;
    if (nombre === "" || correo === "" || telefono === "" || direccion === "") {
      alert("Llene todos los campos...!");
      console.log(form);
    } else {
      setModal(false);
      console.log(form);
      handleGenerarPDF();
    }
  };
  return (
    <div className="mt-24 w-full h-full flex justify-center items-center sm:bg-orange-500 md:bg-red-500 lg:bg-blue-500 xl:bg-pink-500 2xl:bg-gray-500">
      <div className="flex flex-col items-center gap-3 w-full">
        <p className="font-bold text-2xl border-b-4 border-sky-700">
          COTIZACIÓN
        </p>

        {/* Desplegable de categorías */}
        {/* <label className="bg-blue-500" htmlFor="categoria">
          Categoría:
        </label> */}
        <div className="w-full min-w-[200px] flex justify-center md:w-[60%] lg:w-[50%]">
          <select
            className="w-[77%] py-2 pl-3 border border-gray-300 rounded-md"
            id="categoria"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {/* Desplegable de productos */}
        {/* <label htmlFor="producto">Producto:</label> */}
        <div className=" w-full min-w-[200px] flex justify-center md:w-[60%] lg:w-[50%]">
          <select
            className="w-[77%] py-2 pl-3 border border-gray-300 rounded-md"
            id="producto"
            value={productoSeleccionado ? productoSeleccionado.code : ""}
            onChange={(e) => {
              const producto = productos.find((p) => p.code === e.target.value);
              setProductoSeleccionado(producto);
              if (producto) setPrecio(producto.price * cantidad);
            }}
          >
            <option value="">Seleccione un producto</option>
            {productos.map((prod) => (
              <option key={prod.code} value={prod.code}>
                {prod.name}
              </option>
            ))}
          </select>
        </div>
        {/* Input de cantidad */}
        <div className=" w-full min-w-[200px] flex justify-center md:w-[60%] lg:w-[50%]">
          <input
            className="w-[77%] py-2 pl-3 border border-gray-300 rounded-md"
            type="number"
            // id="cantidad"
            placeholder="Cantidad"
            onChange={(e) => {
              setCantidad(parseInt(e.target.value) || 1);
              if (productoSeleccionado) {
                setPrecio(productoSeleccionado.price * (e.target.value || 1));
              }
            }}
            min={0}
          />
        </div>
        {/* Mostrar precio total */}
        <div className="flex gap-2 text-xl font-semibold bg-slate-100 rounded-md p-2">
          <p>Precio:</p>
          <p className="bg-gray-300 px-2 rounded-sm">{precio} Bs</p>
        </div>

        {/* Botón de agregar */}
        <button
          onClick={handleAgregarProducto}
          className="py-2 px-3 bg-[#08b4c4] border rounded-md font-bold text-white active:bg-[#057a82]"
        >
          Agregar Producto
        </button>

        {/* Lista de productos agregados */}
        <p className="font-bold text-lg border-b-4 border-sky-700">
          Productos Agregados
        </p>
        <section className="py-1 bg-blueGray-50 w-[90%] md:w-[70%] lg:w-[60%]">
          <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className=" w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      #
                    </th>
                    <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Producto
                    </th>
                    <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Cantidad
                    </th>
                    <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                      Total
                    </th>
                    <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  {listaProductos.map((prod, index) => (
                    <tr key={prod.code}>
                      <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-blueGray-700 text-center">
                        {index + 1}
                      </th>
                      <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm text-center whitespace-nowrap p-4 ">
                        {prod.name}
                      </td>
                      <td className="border-t-0 px-2 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                        {prod.cantidad}
                      </td>
                      <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center">
                        <i className="fas fa-arrow-up text-emerald-500"></i>
                        {prod.precio}
                      </td>
                      <td
                        className="border-t-0 px-2 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center w-11"
                        onClick={() => handleEliminarProducto(prod.code)}
                      >
                        <img
                          className="cursor-pointer"
                          src="icon-close.png"
                          alt=""
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="flex gap-4 text-base font-semibold bg-slate-100 rounded-md p-2">
          <div className="flex gap-2">
            {!modificar ? (
              <div className="flex gap-2">
                <p>Precio Total:</p>
                <p className="bg-gray-300 px-2 rounded-sm">{precioTotal} Bs</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <p>Precio Total:</p>
                  <p className="bg-gray-300 px-2 rounded-sm">
                    {precioTotal} Bs
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <p>Nuevo Precio:</p>
                  <input
                    type="number"
                    onChange={(e) => setNewInput(e.target.value)}
                    className="bg-gray-300 px-2 rounded-sm w-[40%]"
                  />
                  <button
                    onClick={() => handleAceptar()}
                    className="px-2 bg-[#08b4c4] border rounded-md text-base text-white active:bg-[#057a82]"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            )}
          </div>
          {!modificar ? (
            <button
              onClick={handleModificar}
              className="px-2 bg-[#08b4c4] border rounded-md text-base text-white active:bg-[#057a82]"
            >
              Modificar
            </button>
          ) : (
            <></>
          )}
        </div>
        <button
          onClick={handleCliente}
          className="py-2 px-3 bg-[#08b4c4] border border-solid border-blue-700 border-4 rounded-md font-bold text-black active:bg-[#057a82]"
        >
          Confirmar Cotizacion
        </button>
      </div>
      {modal ? (
        <div
          className={`flex fixed w-full h-full bg-transparent bg-gray-700 bg-opacity-50 justify-center items-center`}
        >
          <div
            className={
              "relative flex gap-3 p-4 w-[97%] h-auto sm:w-[50%] lg:w-[35%] xl:w-[27%] bg-white  flex-col justify-center items-center boder rounded-md md:w-[50%] md:w-[40%] xl:w-[35%] bg-zinc-400"
            }
          >
            <p
              className="absolute top-1 right-2 p-2 bg-red-500 rounded-full text-white cursor-pointer"
              onClick={() => {
                resetForm();
                console.log(form);
                setModal(false);
              }}
            >
              X
            </p>
            <p className="font-bold text-lg border-b-4 border-sky-700">
              Productos Agregados
            </p>
            <form action="" className="w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={dataForm}
                className="w-full py-2 pl-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Correo"
                name="correo"
                onChange={dataForm}
                className="w-full py-2 pl-3 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Telefono"
                name="telefono"
                onChange={dataForm}
                className="w-full py-2 pl-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Direccion"
                name="direccion"
                onChange={dataForm}
                className="w-full py-2 pl-3 border border-gray-300 rounded-md"
              />
            </form>
            <button
              className="bg-[#08b4c4] p-4 border-solid border-2 rounded-lg active:bg-[#057a82] cursor-pointer"
              onClick={() => {
                sendCliente();
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quoter;
