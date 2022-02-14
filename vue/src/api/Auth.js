import Api from './Api'

class AuthApi extends Api {

    login (data) {
        return this.axios.post('/auth/login', data)
    }

    me (data) {
        return this.axios.post(`/auth/me`, data)
    }

    register (data) {
        return this.axios.post('/auth/register', data)
    }

    logout(data) {
        return this.axios.post(`/auth/logout`, data)
    }
}

export default new AuthApi()