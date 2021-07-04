const express = require('express');
const router = express.Router();
const orderController = require('../../src/controllers/orderController');

router.get('/', orderController.getOrder);
router.post('/', orderController.createOrder);
router.put('/', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);


module.exports = router;