const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const bookValidation = require('../validation/bookValidation');

router.post('/',
    bookValidation.postData,
    bookValidation.bookValid,
    bookController.addBook
);
router.put('/', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/', bookController.getBook);

module.exports = router;