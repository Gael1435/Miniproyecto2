const express = require('express');
const router = express.Router();
const db = require('../db');
const { validarContacto } = require('../middleware/validaciones');

router.post('/', validarContacto, (req, res) => {
  db.query('INSERT INTO contacto SET ?', req.body, (err) => {
    if (err) throw err;
    res.json({ mensaje: 'Mensaje guardado' });
  });
});

module.exports = router;