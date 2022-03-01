<template lang="pug">
  .feed
    nav.feed_header
      .feed_wrapper
        img.feed_brand-image(
          src='../assets/img/feed/logo.png',
          alt='',
          @click="$router.push({name: 'feed' })"
        )
        .feed_item-links
          img.feed_icon-profile(
            src='../assets/img/feed/home.png',
            alt='',
            @click="$router.push({ name: 'profile' })"
          )
          img.feed_icon-profile(
            src='../assets/img/feed/exp.png',
            alt='',
            @click="$router.push({name: 'login'})"
          )
          img.feed_icon-profile(
            src='../assets/img/feed/settings.png',
            alt=""
            @click="$router.push({name: 'editProfile'})"
          )
          img.feed_icon-profile.feed_icon-profile__border(
            :src="getUser && getUser.image ? /storage/ + getUser.image : 'storage/profile/user.jpg'",
          )
          p.feed_icon-profile.user-profile {{getUser && getUser.name}}
    router-view
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters(['getUser']),
  },
}
</script>

<style lang="scss" scoped>
.feed {
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  justify-content: center;
  margin-top: 50px;

  background-size: cover;
  align-items: center;
  background: url("../assets/img/profile/main2.png") fixed;
  left: 0;
  opacity: 1;
  top: 0;
}

.feed_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  z-index: 100;
}

.feed_wrapper {
  width: 70%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.feed_brand-image {
  height: 100%;
  margin-top: 5px;
}

.feed_search-box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 25px;
  background: #fafafa;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  text-align: center;
}

.feed_item-links {
  height: 22px;
  position: relative;
}

.feed_icon-profile {
  height: 100%;
  cursor: pointer;
  margin: 0 10px;
  display: inline-block;
}

.feed_icon-profile__border{
  border-radius: 10px;
}

.feed_icon-profile.user-profile{
  position: absolute;
  top: -5px;
  color: black;
}
</style>