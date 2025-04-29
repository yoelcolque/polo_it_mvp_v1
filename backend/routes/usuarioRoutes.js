const express = require('express');
const router = express.Router();

//-------------------------------------------------
const { obtenerUsuarios } = require('../controllers/usuarioController');
const { crearUsuario } = require('../controllers/usuarioController');

//-------------------------------------------------
router.get('/', obtenerUsuarios);
router.post('/', crearUsuario);

//-------------------------------------------------
module.exports = router;
