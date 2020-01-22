'use strict';

const request = require(`supertest`);
const server = require(`./server`);

describe(`Books API end-points`, () => {
  test(`When get books status code should be 200`, async () => {
    const res = await request(server).get(`/api/books`);
    expect(res.statusCode).toBe(200);
  });

  test(`Should 404 because book does't exists`, async () => {
    const res = await request(server).get(`/api/books/3000`);
    expect(res.statusCode).toBe(404);
  });

  test(`Should had properties id and title`, async () => {
    const res = await request(server).get(`/api/books/2`);
    expect(res.body).toHaveProperty(`id`);
    expect(res.body).toHaveProperty(`title`);
  });

  test(`Should 404 because end-pont not exits`, async () => {
    const res = await request(server).get(`/test`);
    expect(res.statusCode).toBe(404);
  });

  test(`Should 400 because title property doesn't exists`, async () => {
    const res = await request(server)
      .post(`/api/books`)
      .send({name: `The Outsider`});
    expect(res.statusCode).toBe(400);
  });

  test(`Should 200 because sent valid data`, async () => {
    const res = await request(server)
      .post(`/api/books`)
      .send({title: `The Outsider`});

    expect(res.statusCode).toBe(200);
  });

  test(`Should retrieve book with title 'The Outsider'`, async () => {
    const res = await request(server)
      .post(`/api/books`)
      .send({title: `The Outsider`});

    const id = parseInt(res.body.id, 10);
    const bookResponse = await request(server)
      .get(`/api/books/${id}`);

    expect(bookResponse.body.title).toBe(`The Outsider`);
  });
});
