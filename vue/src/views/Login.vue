<template lang="pug">
  .login_wrapper
    label.login_title_label Login
    input.login_input(type='email', name='email', placeholder='Email', required='')
    input.login_input(type='password', name='pswd', placeholder='Password', required='')
    button Sign in
    .login_link-container
      a.login_forgot(href='#')
        | Forgot
        strong  password
        |  or
      a.login_back(href='#')  Create account
</template>

<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";

</style>