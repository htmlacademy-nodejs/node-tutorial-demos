'use strict';

const getRemoteData = () => Promise.resolve(`Данные загружены!`);
const getBadData = () => Promise.reject(`Произошла ошибка`);

getRemoteData()
  .then((value) => console.log(value))
  .then(getBadData)
  .catch((error) => console.log(error));
