const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const productosRoutes = require('./routes/productos.routes');
const contactoRoutes = require('./routes/contactos.routes');

app.use('/productos', productosRoutes);
app.use('/contacto', contactoRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});