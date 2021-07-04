const { success, failed } = require('../../config/response');
const { typeBook } = require('../models');

exports.addType = async(req, res) => {
    const payload = {
        tipeBuku: req.body.tipeBuku
    };
    try {
        const data = await typeBook.create(payload);
        return res.json(success({ message: "berhasil ditambah", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "gagal tambah data" }))
    }
}

exports.updateBook = async(req, res) => {
    const payload = {
        id: req.body.id,
        tipeBuku: req.body.tipeBuku
    };
    const where = {
        id: req.body.id
    };
    try {
        const data = await typeBook.update(payload, { where })
        return res.json(success({ message: "data berhasil di update", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "update gagal" }))
    }
};

exports.deleteType = async(req, res) => {
    const where = {
        id: req.params.id
    }
    try {
        const data = await typeBook.destroy({ where });
        return res.json(success({ message: "delete success", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "data gagal dihapus" }));
    }
}

exports.getType = async(req, res) => {
    try {
        const data = await typeBook.findAll();
        return res.json(success({ message: "data sukses ditampilkan", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "gagal ditampilkan", data: data }))
    }

}