const mongoose = require('mongoose'); // inyectamos la dependencia de mongoose
let UsersSchema = new mongoose.Schema({ // declaramos el esquema de los datos
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('Users', UsersSchema); // exportamos el esquema