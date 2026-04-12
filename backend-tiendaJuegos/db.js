const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda_juegos'
});

connection.connect(err => {
  if (err) {
    console.error('Error DB:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = connection;