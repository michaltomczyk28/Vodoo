import Home from './views/Home'
import Auth from './views/Auth'
import Task from './views/Task'

export default [
    {
        path: '/:listName?',
        name: 'home',
        component: Home,
        props: { component: 'task-list'},
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
        component: Home,
        props: {component: 'task'},
        meta: {
            requiresAuth: true
        }
    }
]
