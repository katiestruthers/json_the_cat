const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  const data = JSON.parse(body);
  
  try {
    console.log(data[0].description);
  } catch (error) {
    console.log('No breed available.');
  }
});