// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import HomePage from '../pages/HomePage.vue';
//import ConversationsIndexPage from '../pages/ConversationsIndexPage.vue';
//import ConversationsShowPage from '../pages/ConversationShowPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  /*{
    path: '/conversations',
    component: ConversationsIndexPage,
    beforeEnter: (to, from, next) => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            next({ path: '/' });
        } else {
            next();
        }
    }
  },
  {
    path: '/conversations/:id',
    component: ConversationsShowPage,
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
