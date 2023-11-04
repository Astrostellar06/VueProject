<template>
    <BaseButton :color="'blank'" :disable="isPending" @click="handleClick()" class="button">Log in with Microsoft</BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue';
import { signInAndGetUser } from '../lib/microsoftGraph.js';
import { mapMutations } from 'vuex';

export default {
    name: 'SigninButton',
    components: { BaseButton },
    inheritAttrs: false,

    data() {
        return {
            isPending: false
        }
    },
    methods: {   
        ...mapMutations(['setUser']),     
        async handleClick () {
            this.isPending = true;
            var user = null;
            try {
                user = await signInAndGetUser();
                console.log("user", user.name);
                this.setUser(user);
            } catch (error) {
                console.log("Error while signing in", error);
            } finally {
                this.isPending = false;
            }

            if (user) {
                console.log("user", user);
                //this.$emit('user', user);
            }
        }
    }
}
</script>

<style scoped>
.button {
    border: 1px solid #dadce0;
}

</style>

