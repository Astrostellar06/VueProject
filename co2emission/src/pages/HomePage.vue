<template>
    <BaseLayout>
        <div v-if="user">
            <h3>Welcome {{user.name}}</h3>
        </div>
        <div v-else>
            <SigninButton/>
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import SigninButton from '@/components/SigninButton.vue'
import { mapState } from 'vuex';

export default {
    name: 'HomePage',
    components: {
        BaseLayout,
        SigninButton
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