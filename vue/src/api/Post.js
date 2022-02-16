import Api from './Api'

class PostApi extends Api {

    store (data) {
        return this.axios.post('/posts', data)
    }

}

export default new PostApi()