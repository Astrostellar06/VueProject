import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import the Vuex store
import router from './router'; // Import the Vue router
import vue3GoogleLogin from 'vue3-google-login';
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: '539365171193-k0tru3m6udgjm5fdogifd375l5vc32ro.apps.googleusercontent.com'
})
app.use(VueChartkick)

app.mount('#app');
