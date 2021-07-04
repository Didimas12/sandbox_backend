const { success, failed } = require('../../config/response');
const { User } = require('../models')

exports.getTest = (req, res) => {
    const data = { title: "shift academy" };
    return res.json(success({ message: "data berhasil diterima", data: data }));
};

// exports.createData = async({ body }, res) => {
//     const payload = {
//         nama: body.name,
//         address: body.address,
//         phone: body.phone,
//         gender: body.gender,

//     };
//     try {
//         const data = await User.create(payload);
//         return res.json(
//             success({ message: "data berhasil dibuat", data: data })
//         );
//     } catch (error) {

//         return res.json(
//             failed({ message: error.message, data: "gagal menambahkan data" })
//         );
//     };


// };