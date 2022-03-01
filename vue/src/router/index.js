import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/views/Login";
import Feed from "@/views/Feed";
import Registration from "@/views/Registration";
import Profile from "@/views/Profile";
import EditProfile from "@/views/EditProfile";

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
            props:true,
            children: [
                {
                    path: "login",
                    name:'login',
                    component: Login,
                    props: true
                },
                {
                    path: "register",
                    name:'register',
                    component: Registration,
                    props: true
                },
            ]
        },
        {
            path: "/",
            name:'home',
            component: MainLayout,
            props:true,
            children:[
                {
                    path: "profile",
                    name: "profile",
                    component: Profile,
                    props: true
                },
                {
                    path: "feed",
                    name: "feed",
                    component: Feed,
                    props: true
                },
                {
                    path: "editprofile",
                    name: "editProfile",
                    component: EditProfile,
                    props: true
                }
            ]
        },
    ],
});

export default router
