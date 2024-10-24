function About() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-center shadow-[10px_13px_15px_-10px_rgba(0,0,0,0.5)]">
          <div className="bg-[#04b4c4] text-2xl p-2 w-full text-start">
            <strong>MISIÓN</strong>
          </div>
          <article className="text-lg text-justify p-4">
            Proveer soluciones integrales de alta innovación tecnológicas
            adaptadas a las necesidades del cliente en cuanto a electricidad,
            electrónica, informática y telecomunicaciones asesorando de forma
            transparente y ofreciendo servicios de calidad.
          </article>
        </div>
        <div className="h-auto w-full flex justify-center">
          <img className="w-4/5 h-auto" src="about.png" alt="" />
        </div>
        <div className="flex flex-col justify-center shadow-[10px_13px_15px_-10px_rgba(0,0,0,0.5)]">
          <div className="bg-[#04b4c4] text-2xl p-2 w-full text-start">
            <strong>VISIÓN</strong>
          </div>
          <article className="text-lg text-justify p-4">
            Posicionarnos como una empresa líder de Ingeniería, Seguridad y
            Tecnología a nivel nacional, siendo conocida por su excelencia,
            capacidad creativa, cali- dad, innovación y responsabilidad social.
          </article>
        </div>
      </div>
      <div className="flex justify-center bg-red-500 h-auto">
        <div className="flex flex-col items-center w-[150px] h-[300px] bg-orange-500">
          <div className="h-62">
            <img className="h-full" src="honestidad.png" alt="" />
          </div>
          <div className="bg-gray-300 text-center text-sm h-auto w-full">
            <strong>HONESTIDAD</strong>
          </div>
          <article className="px-3 text-xs h-auto">
            Nuestras acciones y decisiones están enmarcadas en la transparencia
            conducta moral que nuestros clientes demandan.
          </article>
        </div>
        <div className="flex flex-col items-center w-[150px] h-[300px] bg-orange-500">
          <div className="h-62">
            <img className="h-full" src="honestidad.png" alt="" />
          </div>
          <div className="bg-gray-300 text-center text-sm h-auto w-full">
            <strong>HONESTIDAD</strong>
          </div>
          <article className="px-3 text-xs h-auto">
            Nuestras acciones y decisiones están enmarcadas en la transparencia
            conducta moral que nuestros clientes demandan.
          </article>
        </div>

        <div className="flex flex-col w-[150px] h-[300px] bg-orange-500">
          <div className="h-62">
            <img className="h-full" src="responsabilidad.png" alt="" />
          </div>
          <div className="bg-gray-300 text-center text-sm h-auto">
            <strong>RESPONSABILIDAD</strong>
          </div>
          <article className="px-3 text-xs h-auto">
            Nuestras acciones y decisiones están enmarcadas en la transparencia
            conducta moral que nuestros clientes demandan.
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;
