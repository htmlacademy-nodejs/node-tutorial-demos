/* Количество книг */
SELECT COUNT(*)
FROM books;

/* Упорядочить результат */
SELECT
 authors.lastname,
 count(authors.lastname)
FROM authors
GROUP BY authors.lastname
ORDER BY count(authors.lastname) DESC;

/* Пример с HAVING */
SELECT
 authors.lastname,
 count(authors.lastname)
FROM authors
GROUP BY
	authors.lastname
HAVING count(authors.lastname) > 1
ORDER BY count(authors.lastname) DESC;

/* Информация о книгах */
SELECT
	authors.firstname AS "Имя",
	authors.lastname AS "Фамилия",
	books.title AS "Название",
	books.release_date AS "Год выхода",
	books.page_count AS "Страниц",
	countries.title AS "Страна"
FROM books
INNER JOIN authors
	ON books.author_id = authors.id;

/* Информация о книга + страна */
SELECT
	authors.firstname AS "Имя",
	authors.lastname AS "Фамилия",
	books.title AS "Название",
	books.release_date AS "Год выхода",
	books.page_count AS "Страниц",
	countries.title AS "Страна"
FROM books
INNER JOIN authors
	ON books.author_id = authors.id
LEFT JOIN countries
	ON books.country_id = countries.id;

/* Авторы и количество книг */
SELECT
	authors.firstname AS "Имя",
	authors.lastname AS "Фамилия",
	COUNT(books.id) AS "Кол-во книг"
FROM
	authors
	INNER JOIN books
		ON authors.id = books.author_id
GROUP BY
	authors.firstname,
	authors.lastname;

/* Автор + количество книг + упорядочивание */
SELECT
	authors.firstname AS "Имя",
	authors.lastname AS "Фамилия",
	COUNT(books.id) AS "Кол-во книг"
FROM
	authors
	INNER JOIN books
		ON authors.id = books.author_id
GROUP BY
	authors.firstname,
	authors.lastname
ORDER BY
	COUNT(books.id) DESC;

/* Функции для работы со строками */
SELECT
	concat(authors.firstname, ' ', authors.lastname) AS "Автор",
	concat(authors.lastname, ' ', left(authors.firstname, 1)) AS "Автор2",
  md5(authors.lastname) AS "hash"
FROM authors

/* Форматирование года */
SELECT
	concat(authors.firstname, ' ', authors.lastname) AS "Автор",
	to_char(authors.birth_data, 'YYYY') "Год рождения"
FROM authors



