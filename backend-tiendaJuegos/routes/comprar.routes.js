const express = require('express');
const router = express.Router();
const db = require('../db');

//post para poder comprar y restar el stock
router.post('/', (req,res)=>{

  const carrito = req.body;

  carrito.forEach(producto => {
    // actualiza el producto con el que se habia comprado
    db.query(
      `UPDATE productos
       SET stock = stock - ?
       WHERE id = ?`,
      [producto.cantidad, producto.id]
    );

  });
  // mensaje de compra realizada
  res.json({
    mensaje:'Compra realizada'
  });

});

module.exports = router;