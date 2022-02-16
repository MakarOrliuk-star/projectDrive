<template lang="pug">
  .login_wrapper
    .login_title
      label.login_title_label Sign up
      input.login_input(type='text', name='txt', placeholder='User name', v-model="form.name")
      input.login_input(type='email', name='email', placeholder='Email', v-model="form.email" )
      input.login_input(type='password', name='pswd', placeholder='Password', v-model="form.password" )
      button(@click="SignUp") Sign up
    .login_link-container
</template>

<script>
import AuthApi from '@/api/Auth'

export default {
  data(){
    return {
      form:{
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods:{
    SignUp(){
      let form = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      }
      console.log(form)
      AuthApi.register(form)
      .then(() => {
        this.form.name = ''
        this.form.email = ''
        this.form.password = ''

      })
      .catch(error =>{
        console.log(error)
      })
      this.$router.push({name: 'login'})
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";

</style>