import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/views/Login";
import Feed from "@/views/Feed";
import Registration from "@/views/Registration";
import Profile from "@/views/Profile";
import EditProfile from "@/views/EditProfile";
import Cookies from "js-cookie";
import notFound from "@/components/error/NotFound";

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
        {
            path: "*",
            name: '404',
            component: notFound,
            props: true
        },
    ],
});

router.beforeEach((to, from,next) => {

    const accessToken = Cookies.get('userToken', 'access_token')

    if(!accessToken){
        if(to.name === 'login' || to.name === 'register' ) {
            return next()
        } else{
            return next({
                name: 'login'
            })
        }
    }

    next()
})

export default router
