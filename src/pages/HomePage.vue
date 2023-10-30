<template>
    <BaseLayout>
        <div v-if="user">
            <h3>Welcome {{user.name}} to the CO2 emission calculator</h3>
            <SignoutButton/>
            <BaseButton :color="'primary'">
                <router-link to="/calculate" class="router">
                    Calculate CO2 Emissions
                </router-link>
            </BaseButton>
            <BaseButton :color="'primary'">
                <router-link to="/graphic" class="router">
                    Visualize Data
                </router-link>
            </BaseButton>
        </div>
        <div v-else>
            <h3>Welcome to the CO2 emission calculator</h3>
            <br>
            <p>Please sign in to continue:</p>
            <SigninButtonGoogle/><br>
            <SigninButtonMicrosoft/>
        </div>
    </BaseLayout>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseLayout from '@/components/BaseLayout.vue';
import SigninButtonGoogle from '@/components/SigninButtonGoogle.vue'
import SigninButtonMicrosoft from '@/components/SigninButtonMicrosoft.vue'
import { mapState } from 'vuex';

export default {
    name: 'HomePage',
    components: {
    BaseLayout,
    SigninButtonGoogle,
    SigninButtonMicrosoft,
    BaseButton
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

.router {
    text-decoration: none;
    color: white;
}

h3 {
    text-decoration: underline;
}

</style>

<!--<AsyncButton :color="'primary'" :disable="false" @click="handleClick()" @childClick="printClicks"/>-->