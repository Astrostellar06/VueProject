// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import HomePage from '../pages/HomePage.vue';
import FlightPage from '../pages/FlightPage.vue';
import CloudPage from '../pages/CloudPage.vue';
import CustomPage from '../pages/CustomPage.vue';
import GraphicPage from '../pages/GraphicPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import Page404 from '../pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/flight',
    component: FlightPage,
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
    path: '/cloud',
    component: CloudPage,
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
    path: '/custom',
    component: CustomPage,
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
    path: '/about',
    component: AboutPage,
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