const axios = require('axios');

//OPEN WEATHER TOKEN
const api = process.env.WEATHER_TOKEN;

const geocode = async (address) => {
   const url = `http://api.openweathermap.org/geo/1.0/direct?appid=${api}&limit=1&q=${encodeURIComponent(
      address
   )}`;

   try {
      const response = await axios({ method: 'get', url: url });
      const { lat, lon, name, country } = response.data[0];
      return { latitude: lat, longitude: lon, city: name, country: country };
   } catch (error) {
      throw new Error(`Error in geocode: ${error.message}`);
   }
};

module.exports = geocode;
