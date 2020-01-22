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
        hooks: {
            beforeValidate: (author, options) => {
                if (! author.birthDate) {
                    author.birthDate = new Date(`1990-02-01`);
                }
            },
            beforeCreate: (author, options) => {
                console.log(`Новый автор: ${author.lastname} ${author.birthDate}`);
            }
        }
    });

    return Author;
};
