'use strict';

const Joi = require(`@hapi/joi`);

(async () => {
    const bookSchema = Joi.object({
        title: Joi.string()
            .min(2)
            .max(150)
            .required(),
        releaseDate: Joi.string()
            .isoDate()
            .required(),
        pageCount: Joi.number()
            .min(100)
            .max(4000)
            .required(),
        author: Joi.object({
            firstname: Joi.string()
                .min(3)
                .max(50)
                .required(),
            lastname: Joi.string()
                .min(3)
                .max(50)
                .required(),
            birthDate: Joi.string()
                .isoDate()
                .required(),
            email: Joi.string()
                .email()
                .required(),
        }).required(),

        price: Joi.number()
            .min(100)
            .max(1000)
            .required(),

        genres: Joi.array()
            .items(Joi.string())
            .min(1)
            .required(),

        coverType: Joi.string()
            .valid(`soft`, `hard`)
            .required(),
    });

    const mock = {
        "title": "Оно",
        "releaseDate": "1984-01-01",
        "pageCount": 1143,
        "author": {
            "firstname": "Стивен",
            "lastname": "Кинг",
            "birthDate": "1947-09-21",
            "email": "king@king.com"
        },
        "price": "100",
        "genres": ["drama", "horror"],
        "coverType": "hard"
    };

    try {
        const status = await bookSchema.validateAsync(mock, { abortEarly: false });
        console.log(status);
    } catch (err) {
        console.error(err);
    }

})();



