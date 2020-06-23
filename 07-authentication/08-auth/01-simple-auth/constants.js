'use strict';

module.exports.RegisterMessage = {
    USER_ALREADY_REGISTER: `Пользователь с таким email уже зарегистрирован`,
    WRONG_EMAIL: `Неправильный email`,
    REQUIRED_FIELD: `Поле обязательно для заполнения`,
    MIN_PASSWORD_LENGTH: `Пароль должен быть не меньше 6 символов`,
    MAX_PASSWORD_LENGTH: `Пароль должен быть не больше 12 символов`,
    PASSWORDS_NOT_EQUALS: `Пароли не совпадают`,
    EMPTY_VALUE: `Не указано значение`,
}

module.exports.LoginMessage = {
    USER_NOT_EXISTS: `Пользователь с таким email не зарегистрирован`,
    WRONG_PASSWORD: `Неправильно введён логин или пароль`,
    WRONG_EMAIL: `Неправильный email`,
    REQUIRED_FIELD: `Поле обязательно для заполнения`,
}

module.exports.Template = {
    LOGIN_PAGE: `login`,
    REGISTER_PAGE: `register`,
}

module.exports.MIN_PASSWORD_LENGTH = 6;

module.exports.MAX_PASSWORD_LENGTH = 12;
