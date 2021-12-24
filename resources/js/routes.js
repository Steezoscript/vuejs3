import { createWebHistory, createRouter } from "vue-router";
//import VueRouter from 'vue-router'

import App from './components/AppComponent.vue'
import Login from './components/LoginComponent.vue'
import Register from './components/RegisterComponent.vue'
import BlogPage from './components/BlogPageComponent.vue'

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/home',
        component: App
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/register',
        component: Register
    },
    {
        path: '/blogpost/:id',
        name: 'BlogPost',
        component: BlogPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;