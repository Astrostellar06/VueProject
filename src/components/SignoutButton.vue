<template>
    <button @click="handleClick()">Log out</button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'SignoutButton',
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

<style scoped>
    button {
        color: black;
        border: none;
        width: 100%;
        margin: 0;
        padding: 10px;
        background-color: white;
        font-size: medium;
        cursor: pointer;
        transition: background-color 0.6s;
    }

    button:hover {
    background-color: lightgrey;
    transition: background-color 0.4s;
}

</style>