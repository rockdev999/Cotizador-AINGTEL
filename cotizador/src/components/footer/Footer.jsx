function Footer() {
  return (
    <div className="bg-black w-full mt-4 py-3 flex  justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row gap-5">
          <img
            className="border border-8 rounded-full bg-white w-12 h-12"
            src="facebook.png"
            alt=""
          />
          <img
            className="border border-8 rounded-full bg-white w-12 h-12"
            src="tik-tok.png"
            alt=""
          />
          <img
            className="border border-8 rounded-full bg-white w-12 h-12"
            src="instagram.png"
            alt=""
          />
          <img
            className="border border-8 rounded-full bg-white w-12 h-12"
            src="gmail.png"
            alt=""
          />
        </div>
        <div className="font-serif text-white">Contactanos: 61233304</div>
      </div>
    </div>
  );
}

export default Footer;
