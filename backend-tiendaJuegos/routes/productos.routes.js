const { validarProducto } = require("../middleware/validaciones");

router.post('/', validarProducto, (req, res) => {

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

  db.query(sql, [
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

    if (err) return res.status(500).json(err);

    res.json({
      mensaje:'Producto agregado'
    });

  });

});