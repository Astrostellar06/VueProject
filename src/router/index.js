// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import HomePage from '../pages/HomePage.vue';
import CalculatePage from '../pages/CalculatePage.vue';
import GraphicPage from '../pages/GraphicPage.vue';
import Page404 from '../pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/calculate',
    component: CalculatePage,
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
    path: '/graphic',
    component: GraphicPage,
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
    path: '/:pathMatch(.*)*',
    component: Page404,
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;