'use strict';

module.exports = (schema, template) => (
    async (req, res, next) => {
        const { body } = req;
        try {
           await schema.validateAsync(body, { abortEarly: false });
        } catch(err) {
             const { details } = err;
             res.render(template, {
                 errorsMessages: details.map((errorDescription) => errorDescription.message)}
             );
             return;
        }

        next();
    }
);
