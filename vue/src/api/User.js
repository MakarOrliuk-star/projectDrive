import Api from './Api'

class UserApi extends Api {

    index() {
        return this.axios.get('/users')
    }

    show (id) {
        return this.axios.get('/users' + id)
    }

    store(data){
        return this.axios.post('/users', data)
    }

    update(id, data){
        return this.axios.put('/users' + id, data)
    }

    destroy(id){
        return this.axios.delete('/users' + id)
    }
}

export default new UserApi()