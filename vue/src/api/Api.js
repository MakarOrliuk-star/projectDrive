import axios from 'axios'
import Cookies from 'js-cookie'

class Api {
    constructor (){
        this.axios = axios.create({
            baseURL: '/api',
            headers: {}
        })
        this.axios.interceptors.request.use(function (config) {
            let token = Cookies.get('userToken') || null
            if (token) {
                config.headers.Authorization = 'Bearer ' + token
            }
            return config
        })
        this.axios.interceptors.response.use(function (response) {
            if (response?.headers?.authorization) {
                let token = response.headers.authorization.replace(/bearer /i, '')
                this.setTokenHeaderAndCookie(token)
            }

            return Promise.resolve(response)
        }.bind(this))
    }

    setTokenHeaderAndCookie (token) {
        if (token) {
            this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            Cookies.set('userToken', token)
        } else {
            delete this.axios.defaults.headers.common['Authorization']
            Cookies.remove('userToken')
        }
    }
}

export default Api