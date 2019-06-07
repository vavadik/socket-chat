import Welcome from "../components/views/Welcome"
import NotFoundError from "../components/views/NotFoundError"
import Callback from '../components/Callback'
import Layout from '../components/Layout'
import Profile from '../components/views/Profile'
import Chat from '../components/views/chat/Chat'
import VueRouter from 'vue-router'
import auth from "../auth/authService";


const routes = [
    {
        path: '/callback',
        name: 'callback',
        component: Callback
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Welcome
            },
            {
                path: '/welcome',
                component: Welcome
            },
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/chat',
                component: Chat
            },
            {
                path: '*',
                component: NotFoundError
            },
        ]
    },
];

// const publicRoutes = [
//     "/welcome",
//     "/callback",
//     "/"
// ]

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path !== "/profile" || auth.isAuthenticated()) {
        return next();
    }
    auth.login({ target: to.path });
});

export default router;