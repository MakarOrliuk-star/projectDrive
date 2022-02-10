import Api from './Api'

class AuthApi extends Api {

    login (data) {
        return this.axios.post('/auth/login', data)
    }

    loginMe (data) {
        return this.axios.post(`/auth/me`, data)
    }

    loginRefresh (data) {
        return this.axios.post(`/auth/refresh`, data)
    }

    loginLogout(data) {
        return this.axios.post(`/auth/logout`, data)
    }
}

export default new AuthApi()