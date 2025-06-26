const express = require('express');
const router = express.Router();
const { crearUsuario, obtenerUsuarios } = require('../controllers/usuario.controller');

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);

module.exports = router;