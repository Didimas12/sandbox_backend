const { success, failed } = require('../../config/response');
const { Book } = require('../models');

exports.addBook = async(req, res) => {
    const payload = {

        nama: req.body.nama,
    };
    try {
        const data = await Book.create(payload)
        return (res).json(success({ message: " berhasil ditambah", data: data }));
    } catch (error) {
        return (res).json(failed({ message: error.message, message: "gagal tambah data" }));
    }
};

exports.updateBook = async(req, res) => {
    const payload = {
        id: req.body.id,
        nama: req.body.nama,
    };
    const where = {
        id: req.body.id,

    };
    try {
        const data = await Book.update(payload, { where });
        return (res).json(success({ message: "update success", data: data }))
    } catch (error) {
        return (res).json(failed({ message: error.message, message: "failed" }));
    }
};

exports.deleteBook = async(req, res) => {
    const where = {
        id: req.params.id,
    };
    try {
        const data = await Book.destroy({ where })
        return res.json(success({ message: "delete success", data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed" }));
    }
};

exports.getBook = async(req, res) => {
    try {
        const data = await Book.findAll();
        return res.json(success({ message: "data berhasil ditamplkan", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
};