import Api from './Api'

class UserApi extends Api {

    index() {
        return this.axios.get('/user')
    }

    show (id) {
        return this.axios.get('/user' + id)
    }

    store(data){
        return this.axios.post('/user', data)
    }

    update(id, data){
        return this.axios.put('/user/' + id, data)
    }

    destroy(id){
        return this.axios.delete('/user' + id)
    }
}

export default new UserApi()