export default {
    actions: {
        setUser ({ commit }, user) {
            commit('setUser',user)
        },
    },
    mutations: {
        setUser (state, user){
            state.user = user
        }
    },
    state: {
        user: null,
    },
    getters: {
        getUser (state){
            return state.user
        },
    }
}