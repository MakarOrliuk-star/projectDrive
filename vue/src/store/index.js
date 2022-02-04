import Vue from 'vue'
import Vuex from 'vuex'
import post from "./modules/post";
import form from "./modules/form";
import profileEdit from "./modules/profileEdit"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        post,
        form,
        profileEdit
    }
})