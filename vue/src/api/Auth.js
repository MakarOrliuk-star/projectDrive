import Api from './Api'

class AuthApi extends Api {

    me (data) {
        return this.axios.post('/auth/me', data);
    }

    register (data) {
        return this.axios.post('/auth/register', data)
    }

    login (data) {
        return this.axios.post('/auth/login', data)
    }

    logout(data) {
        return this.axios.post(`/auth/logout`, data)
    }
}

export default new AuthApi()