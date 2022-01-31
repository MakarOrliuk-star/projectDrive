import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
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
                    children:[
                        {
                            path:"/edit",
                            name: "edit",
                            component: () => import('@/views/EditProfile.vue'),
                        }
                    ]
                },
                {
                    path: "feed",
                    name: "feed",
                    component: () => import('@/views/Feed.vue'),
                }
            ]
        },
        {
            path: "/facebook",
            beforeEnter() {location.href = 'https://www.facebook.com/'},

        }
    ]
});

export default router
