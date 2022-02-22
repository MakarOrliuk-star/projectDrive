import Api from './Api'

class CommentApi extends Api {

    store (data, postId) {
        return this.axios.post(`/posts/${postId}/comment`, data)
    }

    index(){
        return this.axios.get('/comments')
    }

}

export default new CommentApi()