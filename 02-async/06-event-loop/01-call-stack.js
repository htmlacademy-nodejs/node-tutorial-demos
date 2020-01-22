'use strict';

const getCountTaks = (todoList) => todoList.length;

const getBasicTodo = () => {
  return [
    `Проснуться`,
    `Позавтракать`,
    `Почитать книгу`,
    `Узнать как работает JavaScript`,
    `Отдохнуть`,
  ];
};

const print = (todoList) => {
  todoList.forEach((todo) => console.log(todo));
};

const myTodoList = getBasicTodo();
console.log(`Всего задач: ${getCountTaks(myTodoList)}.`);
print(myTodoList);
