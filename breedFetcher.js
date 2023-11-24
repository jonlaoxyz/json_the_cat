const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

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
    if (breed) { //check if breed is available
      console.log(breed.description); // log the breed description;
    } else { // if not, fail.
      console.log(`Failed to find the breed ${breedName}`);
    }
  });
};

module.exports = { fetchBreedDescription };