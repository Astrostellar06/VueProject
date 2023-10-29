<template>
    <BaseButton :color="'primary'" @click="handleClick()">Log out</BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue';
import { mapMutations } from 'vuex';

export default {
    name: 'SignoutButton',
    components: { BaseButton },
    inheritAttrs: false,

    methods: {   
        ...mapMutations(['setUser']),     
        handleClick () {
            this.setUser(null);
            localStorage.setItem('isLoggedIn', false);
        }
    }
}

</script>