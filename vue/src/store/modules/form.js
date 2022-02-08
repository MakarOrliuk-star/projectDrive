export default {
    actions: {
        setUser (ctx, formUser) {
            ctx.commit('setUser',formUser)
        },
    },
    mutations: {
        setUser (state, formUser) {
            state.user = formUser
        },
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