const Habitaciones = require("../models/Habitaciones");
const getHabitaciones = async (req, res) => {
  try {
    const habitaciones = [
      {
        id: 1,
        nombre: "Habitación Bosque Sagrado",
        imagen: "https://picsum.photos/200",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 2,
        nombre: "Habitación Elegancia Natural",
        imagen: "https://picsum.photos/200",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      { 
        id: 3,
        nombre: "Habitación Roble Real",
        imagen: "https://picsum.photos/200",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 4,
        nombre: "Habitación Serenidad Verde",
        imagen: "https://picsum.photos/200",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 5,
        nombre: "Habitación Tranquilidad Natural",
        imagen: "https://picsum.photos/200",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 6,
        nombre: "Habitación Tronco de Ensueño",
        imagen: "https://picsum.photos/200",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },

      {
        id: 7,
        nombre: "Suite Bosque Encantado",
        imagen: "https://picsum.photos/200",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 8,
        nombre: "Suite Naturaleza Exquisita",
        imagen: "https://picsum.photos/200",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 9,
        nombre: "Suite Ámbar Arbórea",
        imagen: "https://picsum.photos/200",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 10,
        nombre: "Suite Armonía Boscosa",
        imagen: "https://picsum.photos/200",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 pers" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 11,
        nombre: "Suite Aurora Verde",
        imagen: "https://picsum.photos/200",
        precio: 249,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "3 pers" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "35 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 12,
        nombre: "Suite Respiro del Bosque",
        imagen: "https://picsum.photos/200",
        precio: 249,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "3 pers" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "35 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },

      {
        id: 13,
        nombre: "Refugio Bosque Silencioso",
        imagen: "https://picsum.photos/200",
        precio: 299,
        servicios: [
          { icono: "sensor_door", descripcion: "2 cuarto" },
          { icono: "person", descripcion: "4 pers" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "45 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 14,
        nombre: "Refugio Bosque Místico",
        imagen: "https://picsum.photos/200",
        precio: 299,
        servicios: [
          { icono: "sensor_door", descripcion: "2 cuarto" },
          { icono: "person", descripcion: "4 pers" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "45 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 15,
        nombre: "Refugio Bosque Sereno",
        imagen: "https://picsum.photos/200",
        precio: 299,
        servicios: [
          { icono: "sensor_door", descripcion: "2 cuarto" },
          { icono: "person", descripcion: "4 pers" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "45 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 16,
        nombre: "Refugio Bosque Esmeralda",
        imagen: "https://picsum.photos/200",
        precio: 399,
        servicios: [
          { icono: "sensor_door", descripcion: "3 cuarto" },
          { icono: "person", descripcion: "6 pers" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "60 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 17,
        nombre: "Refugio Bosque Dorado",
        imagen: "https://picsum.photos/200",
        precio: 399,
        servicios: [
          { icono: "sensor_door", descripcion: "3 cuarto" },
          { icono: "person", descripcion: "6 pers" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "60 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 18,
        nombre: "Alojamiento Forestal",
        imagen: "https://picsum.photos/200",
        precio: 599,
        servicios: [
          { icono: "sensor_door", descripcion: "4 cuarto" },
          { icono: "person", descripcion: "8 pers" },
          { icono: "bed", descripcion: "King Size" },
          { icono: "home", descripcion: "120 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 19,
        nombre: "Alojamiento Verde Lodge",
        imagen: "https://picsum.photos/200",
        precio: 599,
        servicios: [
          { icono: "sensor_door", descripcion: "4 cuarto" },
          { icono: "person", descripcion: "8 pers" },
          { icono: "bed", descripcion: "King Size" },
          { icono: "home", descripcion: "120 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        id: 20,
        nombre: "Alojamiento Tranquilo del Roble",
        imagen: "https://picsum.photos/200",
        precio: 599,
        servicios: [
          { icono: "sensor_door", descripcion: "4 cuarto" },
          { icono: "person", descripcion: "8 pers" },
          { icono: "bed", descripcion: "King Size" },
          { icono: "home", descripcion: "120 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
    ];
    // const crearhabitaciones = await Habitaciones.create();
    console.log(habitaciones);
    return res.status(200).json(habitaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getHabitaciones };
