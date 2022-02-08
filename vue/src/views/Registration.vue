<template lang="pug">
  .login_wrapper
    .login_title
      label.login_title_label Sign up
      input.login_input(type='text', name='txt', placeholder='User name', required='')
      input.login_input(type='email', name='email', placeholder='Email', required='')
      input.login_input(type='password', name='pswd', placeholder='Password', required='')
      button Sign up
    .login_link-container
</template>

<style lang="scss" scoped>
@import "src/assets/scss/pages/auth/login.scss";

</style>