const express = require('express');
const router = express.Router();

const controller = require('../controllers/index_controllers');

router.get('/', controller.home);
router.get('/home', controller.home);
router.get('/carrito', controller.carrito);
router.get('/checkout', controller.checkout);
router.get('/cuenta', controller.cuenta);
router.get('/detalle_productos', controller.detalle_productos);
router.get('/gracias', controller.gracias);
router.get('/productos', controller.productos);

router.post('/cuenta', controller.newReg);

module.exports = router;