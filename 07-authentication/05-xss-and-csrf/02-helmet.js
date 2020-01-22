'use strict';

const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet({

    // Конфигурация отдельных middleware
	contentSecurityPolicy: {
        directives: {
            scriptSrc: ["'self'"]
        }
    },
    xssFilter: true,
}));
