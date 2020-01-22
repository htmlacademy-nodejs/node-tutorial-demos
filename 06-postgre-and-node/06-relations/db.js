'use strict';

const Sequelize = require(`sequelize`);
const { genres, authors, books } = require(`./mocks`);

const sequelize = new Sequelize(`library`, `academy`, `123456`, {
    host: `localhost`,
    dialect: `postgres`,
});

const Reader = require(`./models/reader`)(sequelize);
const Author = require(`./models/author`)(sequelize);
const Book = require(`./models/book`)(sequelize);
const Genre = require(`./models/genre`)(sequelize);

// Один-ко-многим
Author.hasMany(Book, {
    as: `books`,
    foreignKey: `authorId`
});

// Один-к-одному
Book.belongsTo(Author, {
    foreignKey: `authorId`,
    as: `author`,
});

// Многие ко многим
Book.belongsToMany(Genre, {
    through: `book_genre`,
    as: `genres`,
    foreignKey: `book_id`,
    timestamps: false,
    paranoid: false,
});

Genre.belongsToMany(Book, {
    through: `book_genre`,
    as: `books`,
    foreignKey: `genre_id`,
});

// Синхронизирует модели и заполняет БД
// начальными данными
const initDb = async () => {
    await sequelize.sync({ force: true});
    console.info(`Структура БД успешно создана.`);

    await Genre.bulkCreate(genres);
    await Author.bulkCreate(authors);
    await Book.bulkCreate(books);
};

module.exports = {
    db: {
        Author,
        Book,
        Genre,
        Reader
    },
    initDb,
    sequelize,
};
