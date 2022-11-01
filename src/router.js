import { createRouter, createWebHistory } from "vue-router";

import Layout from './views/Layout.vue';
import Home from './views/HomePage/index.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('./views/AboutPage/index.vue')
            }
        ]
    },
    {
		path: '/:pathMatch(.*)',
		redirect: '/'
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.path != from.path) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    next();
})

export default router;