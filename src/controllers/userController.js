const { success, failed } = require('../../config/response');
const { User } = require('../models');


exports.createData = async({ body }, res) => {
    const payload = {
        nama: body.nama,
        address: body.address,
        phone: body.phone,
        gender: body.gender,

    };
    try {
        const data = await User.create(payload);
        return res.json(
            success({ message: "data berhasil dibuat", data: data })
        );
    } catch (error) {

        return res.json(
            failed({ message: error.message, data: "gagal menambahkan data" })
        );
    };


};

exports.updateData = async({ body }, res) => {
    const payload = {
        nama: body.nama,
        address: body.address,
        phone: body.phone,
        gender: body.gender,
    };
    const where = {
        id: body.id,
    };
    try {
        const data = await User.update(payload, { where });
        return res.json(success({ message: "update success", data }));

    } catch (error) {

        return res.json(failed({ message: error.message, message: "update failed" }));
    }

};

exports.deleteUser = async(req, res) => {
    const where = {
        id: req.params.id
    };
    try {
        const data = await User.destroy({ where })
        return res.json(success({ message: "data berhasil dihapus", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed" }));
    }
}

exports.getUser = async(req, res) => {
    try {
        const data = await User.findAll();
        return res.json(success({ message: "data sukses ditampilkan", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed to load data", data: data }))
    }
}