import Api from './Api'

class CommentApi extends Api {

    store (data) {
        return this.axios.post('/comments', data)
    }

}

export default new CommentApi()