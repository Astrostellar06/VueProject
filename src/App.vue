<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: mapState(['user']),
  mounted() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  methods: {
    handleBeforeUnload() {
      localStorage.removeItem('isLoggedIn');
    }
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }
};
</script>

<style>

</style>