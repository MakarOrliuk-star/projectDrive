import Api from './Api'

class PostApi extends Api {

    store (data) {
        return this.axios.post('/posts', data)
    }

    index(){
        return this.axios.get('/posts')
    }

}

export default new PostApi()