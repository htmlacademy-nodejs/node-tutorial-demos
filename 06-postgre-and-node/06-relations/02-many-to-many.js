'use strict';

const { db, sequelize, initDb } = require(`./db`);
const { Op } = require(`sequelize`);

(async() => {

    const { Genre, Book } = db;

    // Пересоздадим все таблицы и заполним
    // начальными данными
    await initDb();

    // Найдём жанры «Драма» и «Фантастика»
    const genres = await Genre.findAll({
        where: {
            id: {
                [Op.in]: [1, 3]
            }
        },
    });

    // Книга «Черновик»
    const book = await Book.findByPk(7);
    await book.addGenres(genres);

    // Получим все жанры для книги «Черновик»
    const bookGenres = await book.getGenres({ raw: true});
    console.log(bookGenres);

    // И наоборот, все книги для жанра «Фантастика»
    const [fantasyGenre] = genres;
    const fantasyBooks = await fantasyGenre.getBooks({ raw: true});
    console.log(fantasyBooks);

    // Попробуем удалить жанры для книги
    await book.removeGenre(fantasyGenre);

    await sequelize.close();
})();
