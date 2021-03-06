import axios from 'axios'

const index = axios.create()

/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
index.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('authToken')

        if (token) {
            config.headers['Authorization'] = `Bearer ${ token }`
        }

        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)

export default index
