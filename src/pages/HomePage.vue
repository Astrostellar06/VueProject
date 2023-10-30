<template>
    <BaseLayout>
        <div v-if="user">
            <h3>Welcome {{user.name}}</h3>
            <SignoutButton/>
        </div>
        <div v-else>
            <p>Welcome to the CO2 emission calculator</p>
            <p>Please sign in to continue</p>
            <SigninButtonGoogle/><br>
            <SigninButtonMicrosoft/>
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import SigninButtonGoogle from '@/components/SigninButtonGoogle.vue'
import SigninButtonMicrosoft from '@/components/SigninButtonMicrosoft.vue'
import SignoutButton from '@/components/SignoutButton.vue';
import { mapState } from 'vuex';

export default {
    name: 'HomePage',
    components: {
    BaseLayout,
    SigninButtonGoogle,
    SigninButtonMicrosoft,
    SignoutButton
},
    data() {
        return {
            click: 0,
        }
    },
    methods: {
        printClicks(data) {
            this.click = data;
            console.log("click", this.click);
        },
    },
    computed: {
        ...mapState(['user']),
    }
}
</script>

<style scoped>
.buttons {
    margin-bottom: 30px;
}

.AsyncButton {
    margin-bottom: 30px;
}

</style>

<!--<AsyncButton :color="'primary'" :disable="false" @click="handleClick()" @childClick="printClicks"/>-->