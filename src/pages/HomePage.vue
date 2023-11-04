<template>
    <BaseLayout>
        <div v-if="user">
            <h3>Welcome {{ user.name }} to the CO2 emission calculator</h3>
            <br>
            <div class="contain">
                <p>Please select a calculator:</p>
                <div class="buttons">
                    <router-link class="router" to="/flight">
                        <BaseButton :color="'primary'">Flight Travel</BaseButton>
                    </router-link>
                    <router-link class="router" to="/cloud">
                        <BaseButton :color="'primary'">Cloud Computing</BaseButton>
                    </router-link>
                    <router-link class="router" to="/custom">
                        <BaseButton :color="'primary'">Car Travel</BaseButton>
                    </router-link>
                    <router-link class="router" to="/graphic">
                        <BaseButton :color="'primary'">Graphic</BaseButton>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>Welcome to the CO2 emission calculator</h3>
            <br>
            <p>Please sign in to continue:</p>
            <SigninButtonGoogle /><br>
            <SigninButtonMicrosoft />
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

.contain {
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin-left: 30%;
    margin-right: 30%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}

</style>