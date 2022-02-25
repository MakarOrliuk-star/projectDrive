<template lang="pug">
  .login_title
    label.login_title_label Login
    input.login_input(
      type='email',
      name='email',
      placeholder='Email',
      v-model="form.email"
      :error-message="nameError"
    )
    input.login_input(type='password', name='pswd', placeholder='Password', v-model="form.password")
    button(
      @click="signIn"
    ) Sign in
    .login_link-container
      a.login_back(@click="goToCreate")  Create account
</template>

<script>
import {validationMixin} from 'vuelidate';
import {required} from 'vuelidate/lib/validators'

export default {
  mixin:[validationMixin,],

  computed:{
   nameErrors(){
     const errors = []
     if(!this.$v.form.email.required){
       errors.push('Обязательно для заполнения')
     }
     return errors
   }
  },

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
      this.form.email = ''
      this.form.password = ''
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