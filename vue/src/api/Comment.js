import Api from './Api'

class CommentApi extends Api {

    store (data) {
        return this.axios.post(`/comments`, data)
    }

    index(){
        return this.axios.get('/comments')
    }

    destroy (id) {
        return this.axios.delete('/comments/' + id)
    }
}

export default new CommentApi()