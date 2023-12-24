import { createRouter, createWebHistory } from "vue-router"
import AuthenticatedBaseTemplate from "@/views/base/AuthenticatedBaseTemplate.vue"
import UnauthenticatedBaseTemplate from "@/views/base/UnauthenticatedBaseTemplate.vue"
import LoginPageView from "@/views/LoginPageView.vue"
import ForgottenPasswordPageView from "@/views/ForgottenPasswordPageView.vue"
import HomePageView from "@/views/HomePageView.vue"
import ProductPageView from "@/views/ProductPageView.vue"
import CartsListPageView from "@/views/CartsListPageView.vue"
import UpdatesPageView from "@/views/UpdatesPageView.vue"


const url_patterns = [

    // Unauthenticated urls
    {
        path: '/auth/',
        component: UnauthenticatedBaseTemplate,
        children: [
            {
                path: "login",
                name: "login",
                component: LoginPageView
            },

              {
                path: "forgot-password",
                name: "forgot-password",
                component: ForgottenPasswordPageView
            },
        ]
    },

    // Authenticated urls
    {
        path: "/",
        component: AuthenticatedBaseTemplate,
      
        children: [

            // Homepage
            {
                path: "",
                name: "home",
                component: HomePageView,


            },

            // Products
            {
                path: "/products",
                name: "products",
                component: ProductPageView,
            },

            // Carts
            {
                path: "/my_carts",
                name: "carts",
                component: CartsListPageView,
                meta: {
                    requireAuth: false
                }
            },

            // Updates
            {
                path: "/updates",
                name: "updates",
                component: UpdatesPageView,
                meta: {
                    requireAuth: false
                }
            }
        ],
    }
]


const router = createRouter(
    {

        history: createWebHistory(),
        routes: url_patterns,
    }
);


// function to check url authentications
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        const token = localStorage.getItem('farmcitoks');

        if (token) {
            next();
        }
        else {
            next()
            router.push({
                name: "login",
            })
            
        }
    }
    else {
        next();
    }
})


export default router