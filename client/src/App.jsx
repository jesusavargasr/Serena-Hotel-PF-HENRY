import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import ComentPage from "./Componentes/comentpage/comentpage.jsx"
import CreateComentPage from "./Componentes/CreateComentario/CreateComentario.jsx";
import Error404 from "./Componentes/Error 404/Error404.jsx";
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import  CreateUsuario  from "../src/Componentes/CreateUsuario/createUsuario.jsx";
// Esta linea de codigo hace que por default todos los requerimientos en axios se hagan a esta ruta en el back
// Luego nos va a servir para hacer el Deploy del front
axios.defaults.baseURL = "http://localhost:3001/"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comentarios" element={< ComentPage />} />
        <Route path="/comentar" element={< CreateComentPage />} />
        <Route path="/usuario" element={< CreateUsuario />} />
         {/* La siguiente ruta captura cualquier otra ruta y muestra el componente 404 */}
         <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
