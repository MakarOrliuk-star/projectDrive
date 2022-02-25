<template lang="pug">
  .feed_profile-menu
    .feed_profile-card
      img.feed_profile-pic(
          :src="getUser && getUser.image ? /storage/ + getUser.image : 'storage/profile/user.jpg'",
          alt=''
      )
      div
        p.feed_username-profile Makar Orliuk
        p.feed_profile-sub-text {{getUser && getUser.email}}
      button.feed_profile-action-btn Follow
    p.feed_profile-suggestion-text Suggestions for you
    .feed_profile-card(v-for="follower in followers" :key="follower.id")
      .feed_profile-pic
        img(:src='follower.imgSrc', alt='')
      div
        p.feed_username-profile {{ follower.channel }}
        p.feed_profile-sub-text {{ follower.status }}
      button.feed_profile-action-btn Follow
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters(['getUser']),
  },
  data () {
    return {
      followers: []
    }
  },
  mounted () {
    setTimeout(() => {
      for (let i = 1; i < 5; i++) {
        this.followers.push({
          id: i,
          channel: `Channel ${i}`,
          status: 'followed by user',
          imgSrc: ''
        })
      }
    }, 5000);
  },

}

</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/menu.scss";

</style>