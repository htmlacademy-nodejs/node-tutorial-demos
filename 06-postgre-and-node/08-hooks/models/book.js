'use strict';

module.exports = (sequelize, DataTypes) => {
    class Book extends sequelize.Sequelize.Model{ }
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
