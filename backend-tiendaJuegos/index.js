const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
// variables con las rutas
const productosRoutes = require('./routes/productos.routes');
const contactoRoutes = require('./routes/contactos.routes');
const comprarRoutes = require('./routes/comprar.routes');

app.use('/comprar', comprarRoutes);
app.use('/productos', productosRoutes);
app.use('/contacto', contactoRoutes);

app.listen(PORT, () => {
  console.log('Servidor corriendo en ' + PORT);
});