<template>
   <base-card>
      <ul>
         <weather-resource
            :key="weather.city"
            :city="weather.city"
            :country="weather.country"
            :temp="weather.temp"
            :feelsLike="weather.feels_like"
            :pressure="weather.pressure"
            :humidity="weather.humidity"
            :condition="weather.condition"
            :windSpeed="weather.wind_speed"
         ></weather-resource>
      </ul>
   </base-card>
</template>
<!-- latitude,
longitude,
city,
country,
temp,
feels_like,
pressure,
humidity,
wind_speed,
condition, -->
<script>
import WeatherResource from './WeatherResource.vue';
export default {
   props: ['weather'],
   components: {
      WeatherResource,
   },
};
</script>
