<template lang="pug">
  .login_wrapper
    FormLogin(
    @getForm ="currentForm"
    :form ="form"
    )
</template>

<script>
import FormLogin from "@/components/login/input/FormLogin";
import {mapActions} from 'vuex'
export default {
  components:{
    FormLogin
  },

  data(){
    return{
      form: ''
    }
  },
  methods:{
    ...mapActions([
       'setUser'
    ]),
    currentForm (form) {
      this.form = form;
      this.setUser(form);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";

</style>