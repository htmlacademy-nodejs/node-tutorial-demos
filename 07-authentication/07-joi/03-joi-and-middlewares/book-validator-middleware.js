'use strict';

const HTTP_CODE_BAD_REQUEST = 400;

module.exports = (schema) => (
    async (req, res, next) => {
        const { body } = req;

        try {
            await schema.validateAsync(body, { abortEarly: false });
         } catch(err) {
             const { details } = err;
             res.status(HTTP_CODE_BAD_REQUEST).json({
                 message: details.map((errorDescription) => errorDescription.message),
                 data: body
             });
             return;
         }

         next();
    }
);
