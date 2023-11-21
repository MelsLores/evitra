const sql = require('mssql');

const config = {
  user: 'desarrollo03', 
  server: 'EVITRA2K16',
  database: 'Evitra25',
  options: {
    port: 49704,
    encrypt: true,
    trustServerCertificate: true,
    authentication: {
      type: 'default',
    }
  }
};

const pool = new sql.ConnectionPool(config);

// Función para ejecutar la consulta
function executeQuery() {
  pool.connect().then(() => {
    console.log('Conexión exitosa a la base de datos');
    pool.request().query('SELECT * FROM CA_USUARIOS', (err, result) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
      } else {
        console.log(result.recordset);
      }
      pool.close();
    });
  }).catch(err => {
    console.error('Error al conectarse a la base de datos:', err);
  });
}

// Ejecutar la función en el momento que se require el módulo
executeQuery();

module.exports = {
  executeQuery
};
