<template lang="pug">
  .login_wrapper
    FormLogin(
    @getForm ="currentForm"
    :form ="form"
    )
</template>

<script>
import FormLogin from "@/components/login/input/FormLogin";
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
    currentForm (form) {
      this.form = form;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";

</style>