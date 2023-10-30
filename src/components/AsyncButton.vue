<template>
    <BaseButton
      :disabled="isPending"
      :color="color"
      @click.stop.prevent="handleClick"
    >
      <div v-if="isPending">Waiting...</div>
      <slot></slot>
    </BaseButton>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue'
  
  export default {
    name: 'AsyncButton',
    components: { BaseButton },
    inheritAttrs: false,
  
    props: {
      color: {
        type: String,
        default: 'primary'
      }
    },
  
    data () {
      return {
        isPending: false,
        click: 0
      }
    },
  
    methods: {
      handleClick () {
        this.click++;
        const originalOnClick = () => new Promise((resolve) => setTimeout(resolve, 1000*this.click))
        this.isPending = true
        originalOnClick().finally(() => { this.isPending = false;})
        console.log(this.click);
        this.$emit('childClick', this.click);
      }
    }
  }
  </script>