'use strict';

const request = require(`request-promise-native`);
const url = `https://jsonplaceholder.typicode.com/posts`;

const getPosts = async () => {
  try {
    const content = await request(url, {json: true});
    console.log(content);
  } catch (error) {
    console.error(`Произошла ошибка: ${error}`);
  }
};

getPosts();
