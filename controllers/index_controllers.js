const service = require('./db_services');

/*      GETs         */
const home = (req, res) => {
    res.render('home');
}
const carrito = (req, res) => {
    res.render('carrito');
}
const checkout = (req, res) => {
    res.render('checkout');
}
const cuenta = (req, res) => {
    res.render('cuenta');
}
const detalle_productos = (req, res) => {
    res.render('detalle_productos');
}
const gracias = (req, res) => {
    res.render('gracias');
}
const productos = (req, res) => {
    res.render('productos');
}
/*      POSTs         */
/* const newReg = async function(req, res, next){
    const { body: user} = req;
    console.log("req", req.body);
    try{
        const createdUser = await db_services.createdUser({ user });
        res.estatus(201).json({
            data: createdUser,
            message: "usuario creado"
        });
    } catch(err) {
        next(err);
    }
} */

const newReg = function(req, res){
    service.InsertUser(req, res);
    console.log("req", req.body);
}

module.exports = {home, carrito, checkout, cuenta, detalle_productos,
     gracias, productos, newReg}
