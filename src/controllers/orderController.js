const { response } = require('express');
const { success, failed } = require('../../config/response');
const { Order } = require('../models');

exports.getOrder = async(req, res) => {
    try {
        const data = await Order.findAll();
        return res.json(success({ message: "success", data: data }))
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
};

exports.createOrder = async(req, res) => {
    const payload = {

        qty: req.body.qty,
        books_id: req.body.books_id,
        users_id: req.body.users_id

    };
    try {
        const data = await Order.create(payload);
        return res.json(success({ message: "success", data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
};

exports.updateOrder = async(req, res) => {
    const payload = {
        qty: req.body.qty,
        books_id: req.body.books_id,
        users_id: req.body.users_id

    };
    const where = {
        id: req.body.id
    };
    try {
        const data = await Order.update(payload, { where })
        return res.json(success({ message: "success", data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
};

exports.deleteOrder = async(req, res) => {
    const where = {
        id: req.params.id
    };
    try {
        const data = await Order.destroy({ where });
        return res.json(success({ message: "success", data: data }));
    } catch (error) {
        return res.json(failed({ message: error.message, message: "failed", data: data }))
    }
}