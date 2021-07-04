const express = require('express');
const router = express.Router();
const typeBookController = require('../controllers/typeBookController');

router.get('/', typeBookController.getType);
router.post('/', typeBookController.addType);
router.put('/', typeBookController.updateBook);
router.delete('/:id', typeBookController.deleteType);

module.exports = router;