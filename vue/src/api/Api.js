import axios from 'axios'


class Api {
    constructor (){
        this.axios = axios.create({
            baseURL: '/api',
            headers: {}
        })
    }
}

export default Api