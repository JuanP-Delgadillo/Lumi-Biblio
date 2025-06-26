const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const usuarioRoutes = require('./routes/usuario.routes');
const libroRoutes = require('./routes/libro.routes'); // <- conservar esto
require('dotenv').config();
require('./config/db');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api', libroRoutes); // <- conservar esto también

module.exports = app;