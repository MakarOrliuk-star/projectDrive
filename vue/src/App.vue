<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import AuthApi from "@/api/Auth";

const AUTH_ROUTES_NAME = [
    'login', 'register'
]

export default {
  methods: {
    ...mapActions([
      'setUser'
    ]),
  },
  mounted() {
    if (!this.getUser && !AUTH_ROUTES_NAME.includes(this.$route.name)) {
      AuthApi.me()
          .then(response => {
            this.setUser(response.data.data)
          })
          .catch(console.error)
    }
  }
}
</script>

<style>

</style>
