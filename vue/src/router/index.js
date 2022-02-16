import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

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
            component: AuthLayout,
            children: [
                {
                    path: "login",
                    name:'login',
                    component: () => import('@/views/Login.vue')
                },
                {
                    path: "register",
                    name:'register',
                    component: () => import('@/views/Registration.vue')
                },
            ]
        },
        {
            path: "/",
            name:'home',
            component: MainLayout,
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
