import Api from './Api'

class PostApi extends Api {

    store (data) {
        return this.axios.post('/posts', data)
    }

    index(){
        return this.axios.get('/posts')
    }

    destroy (id) {
        return this.axios.delete('/posts/' + id)
    }

    update (id, data) {
        return this.axios.put('/posts/'+ id, data)
    }
}

export default new PostApi()