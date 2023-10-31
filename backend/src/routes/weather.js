const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const router = new express.Router();

router.get('/v1/weather/:city', async (req, res) => {
   try {
      const address = req.params.city;

      //Получили широту и долготу для forecast
      const geocodeData = await geocode(address);
      const { latitude, longitude, city, country } = geocodeData;

      //Получили погоду по долготе и широте
      const forecastData = await forecast(latitude, longitude);
      const { temp, feels_like, pressure, humidity, wind_speed, condition } =
         forecastData;

      const finalForecast = {
         latitude,
         longitude,
         city,
         country,
         temp,
         feels_like,
         pressure,
         humidity,
         wind_speed,
         condition,
      };
      res.status(200).send(finalForecast);
   } catch (error) {
      res.status(400).send({ error: error.message });
   }

   //geocode: city, country forecast: current.temp current['weather'][0].main
});

module.exports = router;
