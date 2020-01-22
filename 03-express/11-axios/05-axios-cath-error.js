const axios = require(`axios`);

axios.get(`https://example.dom`, {timeout: 1000})
  .then((response) => {
    console.log(`Status code ${response.status}`)
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`)
  });
