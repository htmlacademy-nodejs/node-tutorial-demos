const axios = require(`axios`);

const URL_API = `https://jsonplaceholder.typicode.com/posts`

const newPost = {
    title: `foo`,
    body: `bar`,
    userId: 1,
}

axios.post(URL_API, newPost, {timeout: 1000})
  .then((response) => {
    console.log(`Status code ${response.status}`)
    console.log(response.data)
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`)
  });
