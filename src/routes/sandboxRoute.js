const express = require('express');
const router = express.Router();
const sandboxController = require('../controllers/sandboxController');

router.get('/', sandboxController.getTest)


module.exports = router;