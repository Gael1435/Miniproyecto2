const express = require('express');
const router = express.Router();
const db = require('../db');

const { validarProducto } = require('../middlewares/validaciones');


// GET TODOS LOS PRODUCTOS
router.get('/', (req, res) => {

  db.query(
    'SELECT * FROM productos',
    (err, result) => {

      if (err) {
  console.log(err);
  return res.status(500).json({
    code: err.code,
    message: err.sqlMessage,
    full: err
  });
}

      res.json(result);
    }
  );

});


// GET PRODUCTO POR ID
router.get('/:id', (req, res) => {

  db.query(
    'SELECT * FROM productos WHERE id = ?',
    [req.params.id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json(result[0]);
    }
  );

});


// POST AGREGAR PRODUCTO
router.post('/',
validarProducto,
(req, res) => {

  const {
    nombre,
    categoria,
    marca,
    precio,
    stock,
    imagen,
    descripcion,
    disponible
  } = req.body;

  const sql = `
    INSERT INTO productos
    (nombre,categoria,marca,precio,stock,imagen,descripcion,disponible)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      nombre,
      categoria,
      marca,
      precio,
      stock,
      imagen,
      descripcion,
      disponible
    ],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        mensaje: 'Producto agregado'
      });

    }
  );

});

module.exports = router;