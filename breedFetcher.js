
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  let catDesc = data.map(a => a.description);
  console.log(catDesc);
});

