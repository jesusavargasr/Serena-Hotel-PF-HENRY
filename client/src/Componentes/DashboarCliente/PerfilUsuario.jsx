import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsuario } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const UpdateUsuario = () => {
  const dispatch = useDispatch();
  const userId  = localStorage.getItem("userId");
  const isAdmin = localStorage.getItem("isAdmin");
  console.log('aqui',userId)
  

  const [user, setUser] = useState({
    id: userId,
    name: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
    isadmin: isAdmin,
    imagen: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,    
    });
  };

  const handleImageCloudinary = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "preset serena");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/de2jgnztx/image/upload",
      data
    )
  const url=response.data.url
  console.log("aqui",url)
  setUser({...user,
   imagen:url})
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUsuario(user));
      // Restablecer el estado a los valores iniciales en lugar de un objeto vacío
      setUser({
        name: "",
        apellido: "",
        email: "",
        telefono: "",
        contraseña: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };
 console.log("este", user)
  return (
    <div
      className="relative bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="flex flex-col items-center justify-center h-auto bg-blanco w-2/3 rounded-lg px-20 mx-[250px] px-4 pt-3 pb-6">
        <a
          href="/logearse"
          className="font-inter text-base antialiased font-bold text-naranja text-inter hover:scale-105 w-1/6 ml-[-700px] mt-6"
        >
          🡰 Volver
        </a>
        <p className="flex mt-4 font-inter text-3xl antialiased leading-normal text-center font-bold text-gris justify-center">
          Editar Usuario
        </p>
        <div>
        <input
              className="mt-2 w-full text-center text-blanco"
              type="file"
              accept="image/*"
              name="imagen"
              placeholder="Imagen URL"
              onChange={handleImageCloudinary}
              //onBlur={() => handleBlur("imagen")}
            />
        </div>
        <form onSubmit={handleSubmit} className="w-2/3">
          <h2 className="text-2xl mb-4">Crear Usuario</h2>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={user.apellido}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="text"
                  name="telefono"
                  placeholder="Teléfono"
                  value={user.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="password"
                  name="contraseña"
                  placeholder="Contraseña"
                  value={user.contraseña}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="password"
                  name="confirmarContraseña"
                  placeholder="Confirmar Contraseña"
                  value={user.confirmarContraseña}
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>
          <button
            className="w-2/4 mb-4 mt-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
            onClick={handleSubmit}
          >
            EDITAR USUARIO
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsuario;