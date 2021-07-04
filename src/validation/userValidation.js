const { body, validationResult } = require('express-validator')
const { failed } = require('../../config/response');
const { User } = require('../models');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty() == false) {
        return res.json(failed({ message: errors.array()[0].msg }))
    }
    next();
};

exports.postData = [
    body("phone", "nomor hp tidak boleh kosong")
    .notEmpty()
    .custom(async(value) => {
        const dataUser = await User.findOne({ where: { phone: value } })
        if (dataUser) {
            return Promise.reject("nomor hp sudah dipakai")
        }
    }),
];