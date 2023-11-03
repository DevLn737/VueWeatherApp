<template>
   <header>
      <div class="header-logo">
         <img src="../../assets/header-logo.png" alt="" />
         <div class="header-title">
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         require: false,
         default: 'TITLE',
      },
      subtitle: {
         type: String,
         require: false,
         default: 'SUBTITLE',
      },
   },
};
</script>

<style scoped>
/* I AM BAD AT NAMING and css :( */
header {
   display: flex;
   align-items: center;
   justify-content: center;
   max-height: 6.5rem;
   background-color: rgb(31, 32, 43);
   padding: 1rem 4rem;
   width: 100%;
   color: azure;
}
.header-logo {
   display: flex;
   align-items: center;
   margin-left: 3rem;
}
.header-title {
   padding: 0.1rem;
   margin-left: 1rem;
   text-align: start;
}
.header-title h1 {
   font-size: 2rem;
   margin: 0;
   padding: 0;
}
.header-title p {
   color: rgb(155, 155, 168);
   margin: 0;
   padding: 0;
   font-size: 0.8rem;
}

img {
   height: 60px;
   object-fit: cover;
}
</style>
