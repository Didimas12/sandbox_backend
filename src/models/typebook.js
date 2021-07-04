'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class typeBook extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Book, typeBook }) {
            // define association here
            typeBook.hasMany(Book, { foreignKey: "type_books_id" });
        }
    };
    typeBook.init({
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true
        },
        tipeBuku: {
            type: DataTypes.STRING(20),
        }
    }, {
        sequelize,
        modelName: 'typeBook',
    });
    return typeBook;
};