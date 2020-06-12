'use strict';

const express = require(`express`);
const Joi = require(`@hapi/joi`);

const HTTP_CODE_BAD_REQUEST = 400;

const app = express();
app.use(express.json());

const port = 3000;

app.post(`/book`, async (req, res) => {
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

    const { body } = req;

    try {
       await bookSchema.validateAsync(body, { abortEarly: false });
    } catch(err) {
        const { details } = err;
        res.status(HTTP_CODE_BAD_REQUEST).json({
            message: details.map((errorDescription) => errorDescription.message),
            data: body
        });
        return;
    }

    res.json({
        message: `A new book created.`,
        data: body
    });
});

app.listen(port);
