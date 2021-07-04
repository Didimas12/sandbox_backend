const { body, validationResult } = require('express-validator');
const { failed } = require('../../config/response');
const { Book } = require("../models");




exports.bookValid = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty() == false) {
        return res.json(failed({ message: errors.array()[0].msg }));
    }
    next();
}


exports.postData = [
    body("nama", "nama buku harus diisi")
    .notEmpty()
    .custom(async(value) => {
        const dataBuku = await Book.findOne({ where: { nama: value } })
        if (dataBuku) {
            return Promise.reject("nama buku sudah dipakai")
        }
    })

]