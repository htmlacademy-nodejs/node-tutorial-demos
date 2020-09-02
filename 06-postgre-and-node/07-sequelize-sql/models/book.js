'use strict';

const {Model, DataTypes} = require(`sequelize`);

module.exports = (sequelize) => {
    class Book extends Model{}
    Book.init({
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        releaseDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        pageCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        paranoid: false,
    });

    return Book;
};
