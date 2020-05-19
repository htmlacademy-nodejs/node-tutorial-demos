'use strict';

module.exports = (sequelize, DataTypes) => {
    class Genre extends sequelize.Sequelize.Model{ }
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
