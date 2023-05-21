const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const data = JSON.parse(body);
    let desc;
    
    try {
      desc = data[0].description;
    } catch (e) {
      desc = null;
    }

    callback(error, desc);
  });
};

module.exports = fetchBreedDescription;