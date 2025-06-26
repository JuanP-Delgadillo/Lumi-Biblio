const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/libro.controller');

// Ruta para crear un nuevo libro
router.post('/libros', LibroController.crearLibro);
// Ruta para actualizar un libro por ID
router.put('/libros/:id', LibroController.actualizarLibro);
// Obtener todos los libros
router.get('/libros', LibroController.obtenerLibros);
// Obtener un libro por ID
router.get('/libros/:id', LibroController.obtenerLibroPorId);
// Eliminar un libro por ID
router.delete('/libros/:id', LibroController.eliminarLibro);

module.exports = router;