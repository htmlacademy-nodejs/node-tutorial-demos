'use strict';

const express = require(`express`);
const request = require(`request-promise-native`);

const url = `https://jsonplaceholder.typicode.com/posts`;
const port = 3000;
const app = express();

const renderPosts = (posts) => (
  `<ul>
    ${posts
      .map((post) => `<li>${post.title}</li>`)
      .join(``)}</ul>`
);

app.get(`/`, (req, res) => {
  request(url, {json: true})
    .then((posts) => res.send(renderPosts(posts)));
});

app.listen(port, () => {
  console.log(`Сервер принимает подключения на ${port}`);
});


