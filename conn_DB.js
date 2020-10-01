//    CONEXION A LA BD ONLINE
/* const Connection = require('tedious').Connection;

const config = {
  server: 'rastone.database.windows.net',
  authentication: {
      type: 'default',
      options: {
          userName: 'rastone',
          password: 'Molotrece13'
      }
  },
  options: {
    database: 'DB_store'
  }
}

const connection = new Connection(config);

connection.on('connect', function(err) {
  if (err) {
    console.log('ERROR!!\n', err);
  } else {
    console.log('Connection to DB stablished\n');
  }
});

module.exports = connection; */




//    CONEXION A BD LOCAL
const sql = require("mssql");

const config = {
  server: 'SKORPIO',
  database: 'Garbagex',
  options: {
    trustedConnection: true
  }
};

async function conn(){
  await sql.connect(config, ()=>{
    console.log('conectadisimo!!');
  });
};