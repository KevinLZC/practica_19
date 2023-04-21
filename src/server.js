const express = require('express'); // inyectamos express
const mongoose = require('mongoose'); // inyectamos mongoose
const usersRoutes = require('./routes/users'); // inyectamos las router de users
require('dotenv').config(); // inyectamos las variables de ambiente

mongoose.Promise = global.Promise;
const app = express(); // instanciamos aplicación de express
const port = process.env.PORT || 3000; //configuramos el puerto de escucha

app.set('view engine', 'ejs'); // establecemos el valor para el motor de vistas
app.set('views', './src/views') // establecemos la ruta en donde se renderizarán las vistas
app.use(express.urlencoded({extended:false})); 
app.use('/assets', express.static(__dirname + '/../public')); // establecemos la carpeta de estilos
app.use(usersRoutes); //utilizamos el router de personas

mongoose
  .connect(process.env.MONGODB_URI) // conectamos con la base de datos
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`)); // levantamos el servidor

 