const { prisma } = require('../database/prisma');

async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  obtenerUsuarios,
};

//-------------------------------------------------------------------

async function crearUsuario(req, res) {
    try {
      const { nombre, apellido, email, telefono, contraseña, confirmar, rol } = req.body;
  
      const nuevoUsuario = await prisma.usuario.create({
        data: {
          nombre,
          apellido,
          email,
          telefono,
          contraseña,
          confirmar,
          rol,
        },
      });
  
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  }
  
  module.exports = {
    obtenerUsuarios,
    crearUsuario,
  };
  