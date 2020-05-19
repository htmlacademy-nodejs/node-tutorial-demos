'use strict';

module.exports = (sequelize, DataTypes) => {
    class Author extends sequelize.Sequelize.Model{ }
    Author.init({
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        paranoid: false,
    });

    return Author;
};
