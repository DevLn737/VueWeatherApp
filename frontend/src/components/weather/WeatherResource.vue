<template>
   <li>
      <h2>{{ city }},{{ country }}</h2>
      <p>temp: {{ temp }}&#8451;</p>
      <p>feels_like: {{ feelsLike }}&#8451;</p>
      <p>pressure:{{ pressure }}</p>
      <p>humidity: {{ humidity }}%</p>
      <p>wind_speed: {{ windSpeed }}</p>
      <p>condition: {{ condition }}</p>
   </li>
   <!-- latitude, longitude, city, country, temp, feels_like, pressure, humidity,
   wind_speed, condition, -->
</template>

<script>
export default {
   props: [
      'latitude',
      'longitude',
      'city',
      'country',
      'temp',
      'feelsLike',
      'pressure',
      'humidity',
      'windSpeed',
      'condition',
   ],
};
</script>
