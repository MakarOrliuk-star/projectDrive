export default {
    actions: {
        setImage (ctx, infoProfiles) {
            ctx.commit('setImage',infoProfiles)
        },
    },
    mutations: {
        setImage (state, infoProfiles) {
            state.profileEdit = infoProfiles
        },
    },
    state: {
        profileEdit: '',
    },
    getters: {
        getImage (state){
            return state.profileEdit
        },
    }
}