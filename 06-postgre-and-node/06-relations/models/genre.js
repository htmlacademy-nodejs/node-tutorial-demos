'use strict';

const {Model, DataTypes} = require(`sequelize`);

module.exports = (sequelize) => {
    class Genre extends Model{}
    Genre.init({
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    }, {
        sequelize,
        timestamps: false,
        paranoid: false,
    });

return Genre;
};
