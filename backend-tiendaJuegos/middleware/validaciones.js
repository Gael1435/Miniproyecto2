function validarProducto(req, res, next) {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Campos vacíos' });
  }

  if (precio <= 0) {
    return res.status(400).json({ error: 'Precio inválido' });
  }

  next();
}

function validarContacto(req, res, next) {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Campos vacíos' });
  }

  next();
}

module.exports = { validarProducto, validarContacto };