const SobreSerenaLanding = () => {
  return (
    <div className="mt-4 mb-8 ml-4">
      <div className="flex flex-col lg:flex-row items-center mb-8 ml-6 mr-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-4">
          <div className="h-30 border-l-4 border-gray-400 text-left p-4 mb-10">
            <span className="text-3xl font-inter block">Sobre</span>
            <span className="text-3xl font-inter">Serena Hotel</span>
          </div>

          <div>
            <p className="font-inter mb-6 ml-4">
              Descubre la armonía de exuberantes paisajes y disfruta de una
              experiencia única, donde la hospitalidad se combina con la belleza
              natural. Con ubicación privilegiada, Serena Hotel es tu escapada
              perfecta para renovar el espíritu y recargar energías.
            </p>
            
            {/* <Link to="/acercadeserena"> // Hay que activar el link para cuando la view de acerca de nosotros este armada*/} 
              <button className="bg-naranja text-white px-4 py-2 ml-4">
                VER MÁS
              </button>
            {/* </Link> */}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            className="w-auto h-85 rounded-lg lg:mt-0 lg:ml-auto lg:w-2/3"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/283383306.jpg?k=58e13861a77ad49210e8dcfa62acd719318bc214fe1cdedabca054afd5742d1c&o=&hp=1"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default SobreSerenaLanding;