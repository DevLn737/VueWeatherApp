<template>
   <the-header title="Weather app Vue+Node" subtitle="Weather app"></the-header>

   <base-input
      placeholder="Enter the city name"
      v-model="enteredCity"
      @clicked="getWeather(this.enteredCity)"
   ></base-input>

   <weather-storage :weather="weather"></weather-storage>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import WeatherStorage from './components/weather/WeatherStorage.vue';

export default {
   components: { TheHeader, WeatherStorage },
   data() {
      return {
         enteredCity: '',
         weather: {},
         isLoading: false,
      };
   },

   methods: {
      //WIP

      async getWeather() {
         const city = this.enteredCity;

         if (city === '') {
            return console.log('City is empty');
         } else {
            try {
               const response = await fetch(
                  `http://localhost:3000/v1/weather/${city}`
               );

               if (response.ok) {
                  const content = await response.json();
                  this.weather = content
                  this.logToDB(content)
               }

            } catch (error) {
               console.log(error);
            }
         }
      },
      logToDB(data) {
         // Расширить логи в будущем
         const dataToSend = {place: data.city, temp: data.temp}
         fetch('http://localhost:3000/v1/logs', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json; charset=utf-8',
            },
            body:JSON.stringify(dataToSend),
         });
      },
   },

   provide() {
      return { weather: this.weather };
   },

   // mounted() {
   //    this.getWeather();
   // },
};
</script>

<style>
* {
   box-sizing: border-box;
}
html {
   font-family: 'DM Sans', sans-serif;
}
body {
   padding: 0;
   margin: 0;
   background-color: #1f1f1f;
}
ul {
   list-style: none;
}
</style>
