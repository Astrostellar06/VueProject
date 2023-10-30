<template>
    <div>
      <BaseHeader />
        <slot></slot>
      <BaseFooter />
    </div>
  </template>
  
  <script>
  import BaseHeader from './base-header.vue'
  import BaseFooter from './base-footer.vue'
  
  export default {
    name: 'App',
    components: {
      BaseHeader,
      BaseFooter
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
  </style>
  