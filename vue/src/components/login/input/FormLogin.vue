<template lang="pug">
  .login_title
    label.login_title_label Login
    input.login_input(
      type='email',
      name='email',
      placeholder='Email',
      v-model="form.email"
    )
    input.login_input(
      type='password',
      name='pswd',
      placeholder='Password',
      v-model="form.password"
    )
    button(
      @click="signIn"
    ) Sign in
    .login_link-container
      a.login_back(@click="goToCreate")  Create account
</template>

<script>
import { required, } from 'vuelidate/lib/validators'

export default {
  data(){
    return{
      form: {
        email: null,
        password: null,
      }
    }
  },

  methods:{
    signIn(){
      if(this.form.email && this.form.password){
        this.$emit('getForm', this.form)
      }
    },

    goToCreate(){
      this.$router.push({ name: 'register' })
    }
  },

  validations: {
    form: {
      email: { required,  },
      password: { required,  },
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";
button{
  margin: 0 auto;
}
</style>