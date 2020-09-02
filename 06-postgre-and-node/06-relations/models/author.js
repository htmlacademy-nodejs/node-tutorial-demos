'use strict';

const {Model, DataTypes} = require(`sequelize`);

module.exports = (sequelize) => {
    class Author extends Model{}
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
