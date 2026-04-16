const express = require('express');
const router = express.Router();
const db = require('../db');
const { validarContacto } = require('../middlewares/validaciones');

// ruta con middleware para verificar que haya campos
router.post('/', validarContacto , (req, res) => {

  const { nombre, correo, asunto, mensaje } = req.body;

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