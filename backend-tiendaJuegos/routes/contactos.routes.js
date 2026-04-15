const express = require('express');
const router = express.Router();
const db = require('../db');
const { validarProducto } = require('../middlewares/validaciones');
router.post('/', validarProducto, (req, res) => {

  const { nombre, correo, asunto, mensaje } = req.body;

  if (!nombre || !correo || !asunto || !mensaje) {
    return res.status(400).json({
      error: 'Campos vacíos'
    });
  }

  const sql = `
    INSERT INTO mensajes
    (nombre, correo, asunto, mensaje)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql,
    [nombre, correo, asunto, mensaje],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensaje: 'Guardado correctamente'
      });

    });
});

module.exports = router;