<template lang="pug">
  .login_wrapper
    .login_title
      label.login_title_label Sign up
      input.login_input(
        type='text',
        placeholder='User name',
        v-model="form.name",
      )
      span.invalid-feedback(
        v-if="!$v.form.name.required"
      ) Name is required
      input.login_input(
        type='email',
        name='email',
        placeholder='Email',
        v-model="form.email"
      )
      span.invalid-feedback(
        v-if="!$v.form.email.required"
      ) Email is required
      input.login_input(
        type='password',
        name='pswd',
        placeholder='Password',
        v-model="form.password"
      )
      span.invalid-feedback(
        v-if="!$v.form.password.required"
      ) Password is required
      span.invalid-feedback(
        v-if="form.password && !$v.form.password.valid"
      ) Password contains atleast One Uppercase, One Lowercase, One Number
      span.invalid-feedback(
        v-if="form.password && $v.form.password.valid && !$v.form.password.minLength"
      ) Password must be minimum 6 characters
      button(
        @click="SignUp"
        :disabled="this.isDisabled"
      ) Sign up
      a(@click="backToSignIn") Back to Sign in
    .login_link-container
</template>

<script>
import AuthApi from '@/api/Auth'
import { required, minLength, email, maxLength } from 'vuelidate/lib/validators'

export default {
  created() {
    this.submitted = true;
    return this.$v.$touch();
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      submitted: false,
    }
  },

  methods: {
    SignUp() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false; // stop here if form is invalid
      } else {
        this.$toaster.success('Учетная запись успешно создана')
      }

      let form = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
      }
      console.log(form)
      AuthApi.register(form)
          .then(() => {
            this.$router.push({name: 'login'})
          })
          .catch(error => {
            console.log(error)
          })
    },

    backToSignIn(){
      this.$router.push({name: 'login'})
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },

      email: {
        required,
        email
      },

      password: {
        required,
        valid: function (value) {
          const containsUppercase = /[A-Z]/.test(value);
          const containsLowercase = /[a-z]/.test(value);
          const containsNumber = /[0-9]/.test(value);
          return (
              containsUppercase &&
              containsLowercase &&
              containsNumber
          );
        },
        minLength: minLength(6),
        maxLength: maxLength(19),
      },
    }
  },

  computed: {
    isDisabled() {
      return this.$v.$invalid;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";
.invalid-feedback {
  color: red;
}
</style>