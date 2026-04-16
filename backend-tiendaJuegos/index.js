const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// variables con las rutas
const productosRoutes = require('./routes/productos.routes');
const contactoRoutes = require('./routes/contactos.routes');
const comprarRoutes = require('./routes/comprar.routes');

app.use('/comprar', comprarRoutes);
app.use('/productos', productosRoutes);
app.use('/contacto', contactoRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});