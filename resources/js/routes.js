import Home from './views/Home'
import Auth from './views/Auth'
import Task from './views/Task'

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/task/:taskId',
        name: 'task',
        component: Task,
        meta: {
            requiresAuth: true
        }
    }
]
