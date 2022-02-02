<template lang="pug">
  .feed_profile-menu {{getUser.email}}
    .feed_profile-card
      .feed_profile-pic
        img(src='', alt='')
      div
        p.feed_username-profile Makar Orliuk
        p.feed_profile-sub-text @VM_tekken
      button.feed_profile-action-btn Follow
    p.feed_profile-suggestion-text Suggestions for you
    .feed_profile-card(v-for="follower in followers" :key="follower.id")
      .feed_profile-pic
        img(:src='followers.imgSrc', alt='')
      div
        p.feed_username-profile {{ follower.channel }}
        p.feed_profile-sub-text {{ follower.status }}
      button.feed_profile-action-btn Follow
</template>

<script>
import {mapGetters} from 'vuex'

export default {
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
  computed: {
    ...mapGetters(['getUser'],['getImage']),
  },
}

</script>

<style lang="scss" scoped>
@import "src/assets/scss/pages/feed/menu.scss";

</style>