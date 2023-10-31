const axios = require('axios');

//OPEN WEATHER TOKEN
const api = process.env.WEATHER_TOKEN;

const forecast = async (latitude, longitude) => {
   const url = `https://api.openweathermap.org/data/2.5/onecall?appid=${api}&units=metric&lat=${latitude}&lon=${longitude}`;

   try {
      const { data } = await axios.get(url);
      const current = await data.current;

      // Основные данные
      const { temp, feels_like, pressure, humidity, wind_speed } = current;
      // Облачно, солнечно, дождливо и тд
      const condition = current['weather'][0].main;

      return {
         temp,
         feels_like,
         feels_like,
         pressure,
         humidity,
         wind_speed,
         condition,
      };
   } catch (error) {
      throw new Error(`Error in forecast: ${error.message}`);
   }
};

module.exports = forecast;
