const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { route } = require('./bookRouter');
const userValidation = require('../validation/userValidation')


router.post('/',
    userValidation.postData,
    userValidation.runValidation,
    userController.createData);
router.put('/', userController.updateData);
router.delete('/:id', userController.deleteUser);
router.get('/', userController.getUser);

module.exports = router;