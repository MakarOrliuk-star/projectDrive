<template lang="pug">
  .login_wrapper
    FormLogin(
    @getForm ="currentForm"
    )
</template>

<script>
import FormLogin from "@/components/login/input/FormLogin";
import AuthApi from "@/api/Auth";
import Cookies from "js-cookie";

export default {
  components:{
    FormLogin
  },

  data(){
    return{
      form: ''
    }
  },
  methods: {
    currentForm(form) {
      this.form = form;
      AuthApi.login(this.form)
          .then((resp) => {
            Cookies.set('userToken', resp.data['access_token'])
            this.$router.push({name: 'feed'})
            this.$toaster.success('Вы успешно вошли в учетную запись')
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
}
</script>
<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";

</style>