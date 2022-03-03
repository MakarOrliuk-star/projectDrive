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

    logout() {
        return this.axios.post('/auth/logout')
    }
}

export default new AuthApi()