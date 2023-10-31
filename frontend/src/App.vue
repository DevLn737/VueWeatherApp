<template>
      <main>
         <div class="search-box">
            <input
               type="text"
               class="seacth-bar"
               placeholder="Enter the city..."
               v-model="enteredCity"
            />
         </div>

         <button type="button" @click="getWeather">Get weather</button>
         {{ weather }}
      </main>
</template>

<script>
export default {
   data() {
      return {
         enteredCity: '',
         weather: {},
         isLoading: false,
      };
   },
   methods: {
      //WIP
      async getWeather(city) {
         try {
            const response = await fetch(
               `http://localhost:3000/v1/weather/${this.enteredCity}`
            );
            if (response.ok) {
               this.weather = await response.json();
            }
         } catch (error) {
            console.log(error);
         }
      },
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
}
ul {
   list-style: none;
}
</style>
