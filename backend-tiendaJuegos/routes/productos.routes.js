const express = require('express');
const router = express.Router();
const db = require('../db');
const { validarProducto } = require('../middleware/validaciones');

// GET todos
router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET por ID
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// POST agregar producto
router.post('/', validarProducto, (req, res) => {
  const data = req.body;

  db.query('INSERT INTO productos SET ?', data, (err) => {
    if (err) throw err;
    res.json({ mensaje: 'Producto agregado' });
  });
});

module.exports = router;