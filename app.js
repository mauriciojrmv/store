/*Notas: 
    -Ejs no es necesario instanciar en una const porque js ya lo conoce por defecto

*/
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');   // llama al router instanciado en ./routes/index.js
//const connection = require('./conn_DB');  conexion con la BD

//  settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  //Motor de plantillas

//  middlewares
app.use(function(req,res,next){     // Para ver en consola las actividades del server
    console.log(`${req.url} -- ${req.method}`);
    next();
});

app.use(express.json());        // Este es el Body parser
app.use(express.urlencoded({extended: false}));

//  routes
app.use(routes);


//  static files
app.use(express.static(path.join(__dirname, 'public')));

//  error management
//

//  start the server
app.listen(app.get('port'), () => { 
    console.log('\nServer listening on port: ', app.get('port'), '\n')
});