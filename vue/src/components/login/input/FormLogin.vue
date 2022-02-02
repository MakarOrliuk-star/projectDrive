<template lang="pug">
  .login_title
    label.login_title_label Login
    input.login_input(type='email', name='email', placeholder='Email', v-model="form.email")
    input.login_input(type='password', name='pswd', placeholder='Password', v-model="form.password")
    button(
      @click="signIn"
    ) Sign in
    .login_link-container
      a.login_forgot(href='#')
        | Forgot
        strong  password
        |  or
      a.login_back(href='#')  Create account
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return{
      form: {
        email: '',
        password: ''
      }
    }
  },

  validations: {
    form: {
      email: { required, email },
      password: { required, min: minLength(8)  },
    }
  },

  methods:{
    signIn(){
      if(this.form.email && this.form.password){
        this.$emit('getForm', this.form)
        this.$router.push({name: 'feed'})
      }
      this.form.email = ''
      this.form.password = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";
button{
  margin: 0 auto;
}
</style>