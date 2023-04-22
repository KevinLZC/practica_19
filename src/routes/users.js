const express = require('express'); // inyectamos express
const router = express.Router(); // inyectamos router
const mongoose = require('mongoose'); // inyectamos mongoose
let User = require('../models/users'); // importamos el modelo de users

router.get('/usersStyled', async (req, res) => { //ruta con tabla estilizada
  const Users = await User.find({});
  res.render('userList.ejs', {Users});
});

router.get('/users', async (req, res) => { //ruta con datos en crudo
  const Users = await User.find({});
  res.json({Users});
});

module.exports = router; // exportamos el router de users
