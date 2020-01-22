const axios = require(`axios`);

const URL_API = `https://jsonplaceholder.typicode.com/posts`

axios.get(URL_API , {timeout: 1000})
  .then((response) => {
    console.log(`Status code ${response.status}`)
    console.log(`Count posts ${response.data.length}`)
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`)
  })
