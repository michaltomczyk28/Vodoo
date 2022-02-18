import Home from './views/Home'
import Auth from './views/Auth'
import App from './views/App'

export default [
    // {
    //     path: '/',
    //     component: App
    // },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    }
]
