'use strict';

const genres = [
    { title: `Фантастика` },
    { title: `Ужасы` },
    { title: `Драма` },
    { title: `Трагедия` },
    { title: `Комедия` },
    { title: `Роман` },
    { title: `IT`},
];

const authors = [
    { firstname: `Стивен`, lastname: `Кинг`, birthDate: `1947-09-21`},
    { firstname: `Сергей`, lastname: `Лукьяненко`, birthDate: `1968-04-11`},
    { firstname: `Джон`, lastname: `Резиг`, birthDate: `1984-05-08`},
];

const books = [
    { title: `Оно`, releaseDate: `1986-03-01`, pageCount: 1138, authorId: 1},
    { title: `Сияние`, releaseDate: `1977-01-28`, pageCount: 447, authorId: 1},
    { title: `Бессонница`, releaseDate: `1994-09-15`, pageCount: 768, authorId: 1},
    { title: `Чужак`, releaseDate: `2018-05-22`, pageCount: 560, authorId: 1},
    { title: `Ночной дозор`, releaseDate: `1998-01-01`, pageCount: 300, authorId: 2},
    { title: `Лабиринт отражений`, releaseDate: `1997-03-10`, pageCount: 400, authorId: 2},
    { title: `Черновик`, releaseDate: `2005-09-01`, pageCount: 570, authorId: 2},
    { title: `JavaScript. Профессиональные приемы программирования`, releaseDate: `2008-01-01`, pageCount: 384, authorId: 3},
];

module.exports = {
    genres,
    authors,
    books,
}



