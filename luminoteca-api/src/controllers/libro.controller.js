const Libro = require('../models/libro.model');

// Crear un nuevo libro
const crearLibro = async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    console.error(error); // Esto te dará más detalle en la terminal
    res.status(400).json({ mensaje: 'Error al crear el libro', error });
  }
};

// Actualizar un libro por ID
const actualizarLibro = async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Esto devuelve el objeto actualizado
    });

    if (!libroActualizado) {
      return res.status(404).json({ mensaje: 'Libro no encontrado' });
    }

    res.json(libroActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el libro', error });
  }
};

// Obtener todos los libros
const obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los libros', error });
  }
};

// Obtener un libro por ID
const obtenerLibroPorId = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ mensaje: 'Libro no encontrado' });
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el libro', error });
  }
};

// Eliminar un libro por ID
const eliminarLibro = async (req, res) => {
  try {
    const libroEliminado = await Libro.findByIdAndDelete(req.params.id);
    if (!libroEliminado) return res.status(404).json({ mensaje: 'Libro no encontrado' });
    res.status(200).json({ mensaje: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el libro', error });
  }
};

module.exports = { 
  crearLibro,
  actualizarLibro,
  obtenerLibros,
  obtenerLibroPorId,
  eliminarLibro,
};
