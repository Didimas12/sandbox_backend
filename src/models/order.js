'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Order, Book }) {
            Order.belongsTo(User, { foreignKey: "users_id" });
            Order.belongsTo(Book, { foreignKey: "books_id" })
        }
    };
    Order.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        qty: {
            type: DataTypes.INTEGER(11)
        }
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};