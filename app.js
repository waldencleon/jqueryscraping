const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://en.wikipedia.org/wiki/List_of_Asian_countries_by_area';

axios.get(url)
  .then(response => {
    
    const $=cheerio.load(response.data)
    
    console.log($('.firstHeading').text());
    

  })
  .catch(error => {
    console.log(error);
  })




