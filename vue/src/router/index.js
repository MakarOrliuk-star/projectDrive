import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: "/auth",
            component: () => import('@/layouts/AuthLayout.vue'),
            children: [
                {
                    path: "login",
                    name:'login',
                    component: () => import('@/views/Login.vue')
                },
                {
                    path: "reset",
                    name:'reset',
                    component: () => import('@/views/Registration.vue')
                },
            ]
        },
        {
            path: "/",
            name:'home',
            component: () => import('@/layouts/MainLayout.vue'),
            children:[
                {
                    path: "profile",
                    name: "profile",
                    component: () => import('@/views/Profile.vue'),
                },
                {
                    path: "feed",
                    name: "feed",
                    component: () => import('@/views/Feed.vue'),
                },
                {
                    path: "editprofile",
                    name: "editProfile",
                    component: () => import('@/views/EditProfile.vue'),
                }
            ]
        },
    ],
});

export default router
