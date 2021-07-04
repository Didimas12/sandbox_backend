'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Book, Order, typeBook }) {
            // define association here
            Book.hasMany(Order, { foreignKey: "books_id" });
            Book.belongsTo(typeBook, { foreignKey: "type_books_id" })
        }
    };
    Book.init({
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: DataTypes.STRING(60)
        },
    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};