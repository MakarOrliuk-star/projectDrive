import Api from './Api'

class CommentApi extends Api {
    index(){
        return this.axios.get('/posts/comments/')
    }

    destroy (id) {
        return this.axios.delete('/posts/comments/' + id)
    }

    store (postId, commentData) {
        return this.axios.post(`/posts/${postId}/comments`, commentData)
    }
}

export default new CommentApi()