'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User, Order }) {
            User.hasMany(Order, { foreignKey: "users_id" });
        }
    };
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama: {
            type: DataTypes.STRING(40)
        },
        address: {
            type: DataTypes.STRING(50)
        },
        phone: {
            type: DataTypes.INTEGER(20)
        },
        gender: {
            type: DataTypes.ENUM(["M", "F"])
        },

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};