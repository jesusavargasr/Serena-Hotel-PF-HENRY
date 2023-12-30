import NavBarHome from "../NavBarHome/NavBarHome";
import ShoppingCartCard from "../cardCarrito/CardCarrito";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
import Experiencias from "../Experiencias/Experiencias";
import SobreSerenaLanding from "../SobreSerenaLanding/SobreSerenaLanding";
import Servicios from "../Servicios/Servicios";
import BarraInformacion from "../BarraInformacion/BarraInformacion";
import Home from "../Home/Home";
const LandingPage = () => {
  return (
    <>
      <Home />
      <Experiencias />
      <SobreSerenaLanding />
      <BarraInformacion />
      <Servicios />
      <NavBarHome />
      <ShoppingCartCard />
      <GaleriaDeFotos />
      <Footer />
    </>
  );
};
export default LandingPage;
