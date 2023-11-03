<template>
   <div class="buttonIn">
      <input
         type="text"
         :placeholder="placeholder"
         :value="modelValue"
         @input="updateValue"
      />
      <button id="clear" type="button" @click="$emit('clicked')">Search</button>
   </div>
</template>

<script>
export default {
   props: {
      modelValue: '',
      placeholder: {
         type: String,
      },
   },
   methods: {
      updateValue(event) {
         this.$emit('update:modelValue', event.target.value);
      },
      submit(){
        
      }
   },
};
</script>

<style scoped>
.buttonIn {
   width: 800px;
   position: relative;
   margin: 1.5rem auto;
}

input {
   font-size: 2rem;
   color: azure;
   /* color: rgb(77, 78, 87); */
   margin: 0px;
   padding-left: 16px;
   width: 100%;
   outline: none;
   height: 60px;
   border-radius: 16px;
   background-color: rgb(31, 32, 43);
   border-color: #2f2fc4;
}

button {
   font-size: 1rem;
   position: absolute;
   top: 0;
   border-radius: 16px;
   right: 0px;
   z-index: 2;
   border: none;
   top: 0px;
   height: 60px;
   cursor: pointer;
   width: 90px;
   color: white;
   background-color: #1976d2;
   transform: translateX(2px);
   transition: all 0.1s;
}
button:hover {
   background-color: #196bbd;
}
</style>
