// const server = require('./src/app.js'); //importamos el servidor
// const { conn } = require('./src/db.js'); //importamos la conexion a la base de datos
// require("dotenv").config()
// const { DB_PORT } = process.env

// // sincronizamos la base de datos y luego levantamos el servidor, force true borra todas las tablas y las vuelve a crear cada vez que se reinicia el servidor
// conn.sync({ force: false }).then(() => {
//   server.listen(DB_PORT, () => {
//     console.log('%s listening at',DB_PORT); // se permite el uso de console.log en este caso
//   });
// });

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

// false no se borra la base de datos true modo dedarrollador si borras db

conn.sync({ force: false }).then(() => {
  // force: false
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`, PORT);
  });
});
