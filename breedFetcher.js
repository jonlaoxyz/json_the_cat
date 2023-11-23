const request = require('request');

const breedName = process.argv[2]; // read the console value for type of breed to search and pass to breedName
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // use breedName as the "search term" for the api.

request(url, (error, resp, body) => { // perform request
  // console.log(body);
  // console.log(typeof body);

  if (error) {
    return console.log('Failed to request details: ', error); // check for error.
  }

  const data = JSON.parse(body); // parse data - body
//  console.log(data [0]);

  const breed = data[0]; // get object out of array;
  console.log(breed.description); // log the breed description;
});