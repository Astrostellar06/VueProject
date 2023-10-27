<template>

    <GoogleLogin :callback="login"/>
</template>

<script>
import { mapMutations } from 'vuex';
import { GoogleLogin, decodeCredential } from 'vue3-google-login';

export default {
    name: 'SigninButton',
    components: { GoogleLogin },
    inheritAttrs: false,

    data() {
        return {
            isPending: false
        }
    },
    methods: {
        ...mapMutations(['setUser']),
        login (response) {
            console.log(response);
            let user = decodeCredential(response.credential);
            console.log(user.name);
            this.setUser(user);
            localStorage.setItem('isLoggedIn', true);
        },
    }
}
</script>